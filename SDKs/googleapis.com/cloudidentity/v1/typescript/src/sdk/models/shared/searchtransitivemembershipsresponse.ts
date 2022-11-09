import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberRelation } from "./memberrelation";


// SearchTransitiveMembershipsResponse
/** 
 * The response message for MembershipsService.SearchTransitiveMemberships.
**/
export class SearchTransitiveMembershipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberships", elemType: shared.MemberRelation })
  memberships?: MemberRelation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
