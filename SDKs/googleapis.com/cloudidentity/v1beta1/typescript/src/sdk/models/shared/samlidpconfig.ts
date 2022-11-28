import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamlIdpConfig
/** 
 * SAML IDP (identity provider) configuration.
**/
export class SamlIdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changePasswordUri" })
  changePasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=logoutRedirectUri" })
  logoutRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=singleSignOnServiceUri" })
  singleSignOnServiceUri?: string;
}
