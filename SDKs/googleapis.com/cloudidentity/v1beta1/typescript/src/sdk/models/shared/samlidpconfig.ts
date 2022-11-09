import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamlIdpConfig
/** 
 * SAML IDP (identity provider) configuration.
**/
export class SamlIdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=changePasswordUri" })
  changePasswordUri?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=logoutRedirectUri" })
  logoutRedirectUri?: string;

  @Metadata({ data: "json, name=singleSignOnServiceUri" })
  singleSignOnServiceUri?: string;
}
