import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityServiceConfig
/** 
 * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
**/
export class IdentityServiceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
