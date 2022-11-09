import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamlSsoInfo
/** 
 * Details that are applicable when `sso_mode` == `SAML_SSO`.
**/
export class SamlSsoInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=inboundSamlSsoProfile" })
  inboundSamlSsoProfile?: string;
}
