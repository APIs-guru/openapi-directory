import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrgMembership } from "./orgmembership";



// ListOrgMembershipsResponse
/** 
 * The response message for OrgMembershipsService.ListOrgMemberships.
**/
export class ListOrgMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=orgMemberships", elemType: OrgMembership })
  orgMemberships?: OrgMembership[];
}
