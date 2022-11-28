import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" })
  app: string;
}


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams extends SpeakeasyBase {
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


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2;
}


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams;

  @SpeakeasyMetadata()
  queryParams: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @SpeakeasyMetadata()
  security: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity;
}


export class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse?: shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
