import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=range" })
  range: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}

export enum SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum SheetsSpreadsheetsValuesGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}

export enum SheetsSpreadsheetsValuesGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}


export class SheetsSpreadsheetsValuesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTimeRenderOption" })
  dateTimeRenderOption?: SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=majorDimension" })
  majorDimension?: SheetsSpreadsheetsValuesGetMajorDimensionEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=valueRenderOption" })
  valueRenderOption?: SheetsSpreadsheetsValuesGetValueRenderOptionEnum;
}


export class SheetsSpreadsheetsValuesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesGetSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: SheetsSpreadsheetsValuesGetSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: SheetsSpreadsheetsValuesGetSecurityOption5;
}


export class SheetsSpreadsheetsValuesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesGetPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesGetQueryParams;

  @Metadata()
  security: SheetsSpreadsheetsValuesGetSecurity;
}


export class SheetsSpreadsheetsValuesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  valueRange?: shared.ValueRange;
}
