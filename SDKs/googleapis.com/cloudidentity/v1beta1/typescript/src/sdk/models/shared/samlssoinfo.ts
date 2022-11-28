import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamlSsoInfo
/** 
 * Details that are applicable when `sso_mode` == `SAML_SSO`.
**/
export class SamlSsoInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inboundSamlSsoProfile" })
  inboundSamlSsoProfile?: string;
}
