import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityAwareProxyClient
/** 
 * Contains the data that describes an Identity Aware Proxy owned client.
**/
export class IdentityAwareProxyClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
