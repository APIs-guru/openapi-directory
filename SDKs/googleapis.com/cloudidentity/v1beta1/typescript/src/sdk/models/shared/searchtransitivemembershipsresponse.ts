import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberRelation } from "./memberrelation";



// SearchTransitiveMembershipsResponse
/** 
 * The response message for MembershipsService.SearchTransitiveMemberships.
**/
export class SearchTransitiveMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: MemberRelation })
  memberships?: MemberRelation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
