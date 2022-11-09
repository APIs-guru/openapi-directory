import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguageDocumentsAnalyzeEntitiesQueryParams extends SpeakeasyBase {
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


export class LanguageDocumentsAnalyzeEntitiesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeEntitiesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class LanguageDocumentsAnalyzeEntitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: LanguageDocumentsAnalyzeEntitiesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: LanguageDocumentsAnalyzeEntitiesSecurityOption2;
}


export class LanguageDocumentsAnalyzeEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LanguageDocumentsAnalyzeEntitiesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AnalyzeEntitiesRequest;

  @Metadata()
  security: LanguageDocumentsAnalyzeEntitiesSecurity;
}


export class LanguageDocumentsAnalyzeEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  analyzeEntitiesResponse?: shared.AnalyzeEntitiesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
