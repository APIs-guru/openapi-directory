import { SpeakeasyBase } from "../../../internal/utils";
import { MemberRelation } from "./memberrelation";
/**
 * The response message for MembershipsService.SearchTransitiveMemberships.
**/
export declare class SearchTransitiveMembershipsResponse extends SpeakeasyBase {
    memberships?: MemberRelation[];
    nextPageToken?: string;
}
