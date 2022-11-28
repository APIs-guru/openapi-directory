import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityAwareProxyClient
/** 
 * Contains the data that describes an Identity Aware Proxy owned client.
**/
export class IdentityAwareProxyClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}


// IdentityAwareProxyClientInput
/** 
 * Contains the data that describes an Identity Aware Proxy owned client.
**/
export class IdentityAwareProxyClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
