import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamlIdpConfig } from "./samlidpconfig";
import { SamlSpConfig } from "./samlspconfig";



// InboundSamlSsoProfile
/** 
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
export class InboundSamlSsoProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=idpConfig" })
  idpConfig?: SamlIdpConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spConfig" })
  spConfig?: SamlSpConfig;
}


// InboundSamlSsoProfileInput
/** 
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
export class InboundSamlSsoProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=idpConfig" })
  idpConfig?: SamlIdpConfig;
}
