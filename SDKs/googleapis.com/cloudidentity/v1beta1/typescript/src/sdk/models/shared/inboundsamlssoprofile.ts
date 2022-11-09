import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SamlIdpConfig } from "./samlidpconfig";
import { SamlSpConfig } from "./samlspconfig";


// InboundSamlSsoProfile
/** 
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
export class InboundSamlSsoProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=idpConfig" })
  idpConfig?: SamlIdpConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=spConfig" })
  spConfig?: SamlSpConfig;
}
