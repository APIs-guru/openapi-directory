import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityAwareProxyClient } from "./identityawareproxyclient";



// ListIdentityAwareProxyClientsResponse
/** 
 * Response message for ListIdentityAwareProxyClients.
**/
export class ListIdentityAwareProxyClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityAwareProxyClients", elemType: IdentityAwareProxyClient })
  identityAwareProxyClients?: IdentityAwareProxyClient[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
