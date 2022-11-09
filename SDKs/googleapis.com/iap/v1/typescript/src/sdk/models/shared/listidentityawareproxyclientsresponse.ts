import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityAwareProxyClient } from "./identityawareproxyclient";


// ListIdentityAwareProxyClientsResponse
/** 
 * Response message for ListIdentityAwareProxyClients.
**/
export class ListIdentityAwareProxyClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityAwareProxyClients", elemType: shared.IdentityAwareProxyClient })
  identityAwareProxyClients?: IdentityAwareProxyClient[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
