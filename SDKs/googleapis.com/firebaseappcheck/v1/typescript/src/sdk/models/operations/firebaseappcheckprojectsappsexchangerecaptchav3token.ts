import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" })
  app: string;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams;

  @SpeakeasyMetadata()
  queryParams: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;

  @SpeakeasyMetadata()
  security: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity;
}


export class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;

  @SpeakeasyMetadata()
  statusCode: number;
}
