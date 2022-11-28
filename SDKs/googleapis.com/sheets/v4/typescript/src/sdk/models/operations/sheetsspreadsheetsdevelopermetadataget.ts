import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SheetsSpreadsheetsDeveloperMetadataGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataId" })
  metadataId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsDeveloperMetadataGetQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsDeveloperMetadataGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3;
}


export class SheetsSpreadsheetsDeveloperMetadataGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SheetsSpreadsheetsDeveloperMetadataGetPathParams;

  @SpeakeasyMetadata()
  queryParams: SheetsSpreadsheetsDeveloperMetadataGetQueryParams;

  @SpeakeasyMetadata()
  security: SheetsSpreadsheetsDeveloperMetadataGetSecurity;
}


export class SheetsSpreadsheetsDeveloperMetadataGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  developerMetadata?: shared.DeveloperMetadata;

  @SpeakeasyMetadata()
  statusCode: number;
}
