import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamlSpConfig
/** 
 * SAML SP (service provider) configuration.
**/
export class SamlSpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=assertionConsumerServiceUri" })
  assertionConsumerServiceUri?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;
}
