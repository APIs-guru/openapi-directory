import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrgMembership } from "./orgmembership";


// ListOrgMembershipsResponse
/** 
 * The response message for OrgMembershipsService.ListOrgMemberships.
**/
export class ListOrgMembershipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=orgMemberships", elemType: shared.OrgMembership })
  orgMemberships?: OrgMembership[];
}
