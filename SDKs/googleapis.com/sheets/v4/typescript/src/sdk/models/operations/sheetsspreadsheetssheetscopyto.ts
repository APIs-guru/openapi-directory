import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsSheetsCopyToPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sheetId" })
  sheetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsSheetsCopyToQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsSheetsCopyToSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsSheetsCopyToSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsSheetsCopyToSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsSheetsCopyToSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsSheetsCopyToSecurityOption3;
}


export class SheetsSpreadsheetsSheetsCopyToRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsSheetsCopyToPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsSheetsCopyToQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CopySheetToAnotherSpreadsheetRequest;

  @Metadata()
  security: SheetsSpreadsheetsSheetsCopyToSecurity;
}


export class SheetsSpreadsheetsSheetsCopyToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sheetProperties?: shared.SheetProperties;

  @Metadata()
  statusCode: number;
}
