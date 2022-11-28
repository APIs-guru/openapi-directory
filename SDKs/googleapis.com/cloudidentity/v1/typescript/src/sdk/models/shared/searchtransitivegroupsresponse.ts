import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupRelation } from "./grouprelation";



// SearchTransitiveGroupsResponse
/** 
 * The response message for MembershipsService.SearchTransitiveGroups.
**/
export class SearchTransitiveGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: GroupRelation })
  memberships?: GroupRelation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
