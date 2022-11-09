import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app" })
  app: string;
}


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams extends SpeakeasyBase {
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


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2;
}


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams;

  @Metadata()
  queryParams: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest;

  @Metadata()
  security: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity;
}


export class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;

  @Metadata()
  statusCode: number;
}
