import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SheetsSpreadsheetsSheetsCopyToPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sheetId" })
  sheetId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsSheetsCopyToQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsSheetsCopyToSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsSheetsCopyToSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsSheetsCopyToSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsSheetsCopyToSecurityOption3;
}


export class SheetsSpreadsheetsSheetsCopyToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SheetsSpreadsheetsSheetsCopyToPathParams;

  @SpeakeasyMetadata()
  queryParams: SheetsSpreadsheetsSheetsCopyToQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CopySheetToAnotherSpreadsheetRequest;

  @SpeakeasyMetadata()
  security: SheetsSpreadsheetsSheetsCopyToSecurity;
}


export class SheetsSpreadsheetsSheetsCopyToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sheetProperties?: shared.SheetProperties;

  @SpeakeasyMetadata()
  statusCode: number;
}
