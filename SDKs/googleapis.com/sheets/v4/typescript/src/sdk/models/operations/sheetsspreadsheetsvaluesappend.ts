import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesAppendPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=range" })
  range: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}

export enum SheetsSpreadsheetsValuesAppendInsertDataOptionEnum {
    Overwrite = "OVERWRITE"
,    InsertRows = "INSERT_ROWS"
}

export enum SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}

export enum SheetsSpreadsheetsValuesAppendValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED"
,    Raw = "RAW"
,    UserEntered = "USER_ENTERED"
}


export class SheetsSpreadsheetsValuesAppendQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeValuesInResponse" })
  includeValuesInResponse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=insertDataOption" })
  insertDataOption?: SheetsSpreadsheetsValuesAppendInsertDataOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=responseValueRenderOption" })
  responseValueRenderOption?: SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=valueInputOption" })
  valueInputOption?: SheetsSpreadsheetsValuesAppendValueInputOptionEnum;
}


export class SheetsSpreadsheetsValuesAppendSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesAppendSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesAppendSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesAppendSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesAppendSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesAppendSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesAppendSecurityOption3;
}


export class SheetsSpreadsheetsValuesAppendRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesAppendPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesAppendQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ValueRange;

  @Metadata()
  security: SheetsSpreadsheetsValuesAppendSecurity;
}


export class SheetsSpreadsheetsValuesAppendResponse extends SpeakeasyBase {
  @Metadata()
  appendValuesResponse?: shared.AppendValuesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
