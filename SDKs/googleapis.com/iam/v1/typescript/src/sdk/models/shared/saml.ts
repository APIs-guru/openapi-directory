import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Saml
/** 
 * Represents an SAML 2.0 identity provider.
**/
export class Saml extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idpMetadataXml" })
  idpMetadataXml?: string;
}
