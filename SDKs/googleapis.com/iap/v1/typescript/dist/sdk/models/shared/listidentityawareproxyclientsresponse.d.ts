import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityAwareProxyClient } from "./identityawareproxyclient";
/**
 * Response message for ListIdentityAwareProxyClients.
**/
export declare class ListIdentityAwareProxyClientsResponse extends SpeakeasyBase {
    identityAwareProxyClients?: IdentityAwareProxyClient[];
    nextPageToken?: string;
}
