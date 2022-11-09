import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Saml
/** 
 * Represents an SAML 2.0 identity provider.
**/
export class Saml extends SpeakeasyBase {
  @Metadata({ data: "json, name=idpMetadataXml" })
  idpMetadataXml?: string;
}
