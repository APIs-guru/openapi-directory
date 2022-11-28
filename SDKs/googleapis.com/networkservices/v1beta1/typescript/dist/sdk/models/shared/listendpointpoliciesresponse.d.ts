import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPolicy } from "./endpointpolicy";
/**
 * Response returned by the ListEndpointPolicies method.
**/
export declare class ListEndpointPoliciesResponse extends SpeakeasyBase {
    endpointPolicies?: EndpointPolicy[];
    nextPageToken?: string;
}
