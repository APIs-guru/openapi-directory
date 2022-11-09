import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityServiceConfig
/** 
 * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
**/
export class IdentityServiceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
