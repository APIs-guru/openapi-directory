import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguageDocumentsAnalyzeEntitySentimentQueryParams extends SpeakeasyBase {
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


export class LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeEntitySentimentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: LanguageDocumentsAnalyzeEntitySentimentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: LanguageDocumentsAnalyzeEntitySentimentSecurityOption2;
}


export class LanguageDocumentsAnalyzeEntitySentimentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LanguageDocumentsAnalyzeEntitySentimentQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AnalyzeEntitySentimentRequest;

  @Metadata()
  security: LanguageDocumentsAnalyzeEntitySentimentSecurity;
}


export class LanguageDocumentsAnalyzeEntitySentimentResponse extends SpeakeasyBase {
  @Metadata()
  analyzeEntitySentimentResponse?: shared.AnalyzeEntitySentimentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
