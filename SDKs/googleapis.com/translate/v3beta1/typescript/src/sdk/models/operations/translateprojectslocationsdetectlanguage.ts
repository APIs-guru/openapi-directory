import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslateProjectsLocationsDetectLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class TranslateProjectsLocationsDetectLanguageQueryParams extends SpeakeasyBase {
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


export class TranslateProjectsLocationsDetectLanguageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TranslateProjectsLocationsDetectLanguageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TranslateProjectsLocationsDetectLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TranslateProjectsLocationsDetectLanguageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TranslateProjectsLocationsDetectLanguageSecurityOption2;
}


export class TranslateProjectsLocationsDetectLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslateProjectsLocationsDetectLanguagePathParams;

  @Metadata()
  queryParams: TranslateProjectsLocationsDetectLanguageQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DetectLanguageRequest;

  @Metadata()
  security: TranslateProjectsLocationsDetectLanguageSecurity;
}


export class TranslateProjectsLocationsDetectLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectLanguageResponse?: shared.DetectLanguageResponse;

  @Metadata()
  statusCode: number;
}
