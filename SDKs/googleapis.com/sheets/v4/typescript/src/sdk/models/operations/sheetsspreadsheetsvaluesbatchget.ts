import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesBatchGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}

export enum SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}

export enum SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}


export class SheetsSpreadsheetsValuesBatchGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTimeRenderOption" })
  dateTimeRenderOption?: SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=majorDimension" })
  majorDimension?: SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ranges" })
  ranges?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=valueRenderOption" })
  valueRenderOption?: SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesBatchGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesBatchGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesBatchGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: SheetsSpreadsheetsValuesBatchGetSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: SheetsSpreadsheetsValuesBatchGetSecurityOption5;
}


export class SheetsSpreadsheetsValuesBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesBatchGetPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesBatchGetQueryParams;

  @Metadata()
  security: SheetsSpreadsheetsValuesBatchGetSecurity;
}


export class SheetsSpreadsheetsValuesBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  batchGetValuesResponse?: shared.BatchGetValuesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
