import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SheetsSpreadsheetsValuesBatchGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}

export enum SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}

export enum SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}

export enum SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}


export class SheetsSpreadsheetsValuesBatchGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTimeRenderOption" })
  dateTimeRenderOption?: SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=majorDimension" })
  majorDimension?: SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ranges" })
  ranges?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=valueRenderOption" })
  valueRenderOption?: SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesBatchGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesBatchGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesBatchGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: SheetsSpreadsheetsValuesBatchGetSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: SheetsSpreadsheetsValuesBatchGetSecurityOption5;
}


export class SheetsSpreadsheetsValuesBatchGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SheetsSpreadsheetsValuesBatchGetPathParams;

  @SpeakeasyMetadata()
  queryParams: SheetsSpreadsheetsValuesBatchGetQueryParams;

  @SpeakeasyMetadata()
  security: SheetsSpreadsheetsValuesBatchGetSecurity;
}


export class SheetsSpreadsheetsValuesBatchGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetValuesResponse?: shared.BatchGetValuesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
