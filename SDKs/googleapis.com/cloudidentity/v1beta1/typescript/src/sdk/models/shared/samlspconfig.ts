import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamlSpConfig
/** 
 * SAML SP (service provider) configuration.
**/
export class SamlSpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assertionConsumerServiceUri" })
  assertionConsumerServiceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;
}
