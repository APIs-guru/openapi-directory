import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupRelation } from "./grouprelation";
/**
 * The response message for MembershipsService.SearchTransitiveGroups.
**/
export declare class SearchTransitiveGroupsResponse extends SpeakeasyBase {
    memberships?: GroupRelation[];
    nextPageToken?: string;
}
