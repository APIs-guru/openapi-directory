import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams;

  @Metadata()
  queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams;

  @Metadata()
  security: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity;
}


export class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudIdentitytoolkitAdminV2OAuthIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

  @Metadata()
  statusCode: number;
}
