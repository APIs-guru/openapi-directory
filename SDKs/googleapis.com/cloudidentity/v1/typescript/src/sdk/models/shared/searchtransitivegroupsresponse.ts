import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupRelation } from "./grouprelation";


// SearchTransitiveGroupsResponse
/** 
 * The response message for MembershipsService.SearchTransitiveGroups.
**/
export class SearchTransitiveGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberships", elemType: shared.GroupRelation })
  memberships?: GroupRelation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
