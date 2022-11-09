import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app" })
  app: string;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams extends SpeakeasyBase {
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


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams;

  @Metadata()
  queryParams: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;

  @Metadata()
  security: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;

  @Metadata()
  statusCode: number;
}
