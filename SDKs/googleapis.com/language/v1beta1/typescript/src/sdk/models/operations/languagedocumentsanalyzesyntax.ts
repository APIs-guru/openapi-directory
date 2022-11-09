import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguageDocumentsAnalyzeSyntaxQueryParams extends SpeakeasyBase {
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


export class LanguageDocumentsAnalyzeSyntaxSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeSyntaxSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeSyntaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: LanguageDocumentsAnalyzeSyntaxSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: LanguageDocumentsAnalyzeSyntaxSecurityOption2;
}


export class LanguageDocumentsAnalyzeSyntaxRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LanguageDocumentsAnalyzeSyntaxQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AnalyzeSyntaxRequest;

  @Metadata()
  security: LanguageDocumentsAnalyzeSyntaxSecurity;
}


export class LanguageDocumentsAnalyzeSyntaxResponse extends SpeakeasyBase {
  @Metadata()
  analyzeSyntaxResponse?: shared.AnalyzeSyntaxResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
