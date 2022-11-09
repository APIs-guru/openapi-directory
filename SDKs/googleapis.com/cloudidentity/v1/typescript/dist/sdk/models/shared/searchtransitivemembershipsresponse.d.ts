import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberRelation } from "./memberrelation";
/**
 * The response message for MembershipsService.SearchTransitiveMemberships.
**/
export declare class SearchTransitiveMembershipsResponse extends SpeakeasyBase {
    memberships?: MemberRelation[];
    nextPageToken?: string;
}
