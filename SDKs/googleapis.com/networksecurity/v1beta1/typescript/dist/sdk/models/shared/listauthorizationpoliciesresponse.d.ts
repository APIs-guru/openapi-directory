import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationPolicy } from "./authorizationpolicy";
/**
 * Response returned by the ListAuthorizationPolicies method.
**/
export declare class ListAuthorizationPoliciesResponse extends SpeakeasyBase {
    authorizationPolicies?: AuthorizationPolicy[];
    nextPageToken?: string;
}
