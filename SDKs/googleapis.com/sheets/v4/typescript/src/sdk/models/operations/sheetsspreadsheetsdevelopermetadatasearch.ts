import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SheetsSpreadsheetsDeveloperMetadataSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SheetsSpreadsheetsDeveloperMetadataSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: SheetsSpreadsheetsDeveloperMetadataSearchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SearchDeveloperMetadataRequest;

  @SpeakeasyMetadata()
  security: SheetsSpreadsheetsDeveloperMetadataSearchSecurity;
}


export class SheetsSpreadsheetsDeveloperMetadataSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchDeveloperMetadataResponse?: shared.SearchDeveloperMetadataResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
