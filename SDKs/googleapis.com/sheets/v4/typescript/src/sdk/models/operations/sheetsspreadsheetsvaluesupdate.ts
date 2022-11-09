import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=range" })
  range: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}

export enum SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}

export enum SheetsSpreadsheetsValuesUpdateValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED"
,    Raw = "RAW"
,    UserEntered = "USER_ENTERED"
}


export class SheetsSpreadsheetsValuesUpdateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=responseValueRenderOption" })
  responseValueRenderOption?: SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=valueInputOption" })
  valueInputOption?: SheetsSpreadsheetsValuesUpdateValueInputOptionEnum;
}


export class SheetsSpreadsheetsValuesUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesUpdateSecurityOption3;
}


export class SheetsSpreadsheetsValuesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesUpdatePathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ValueRange;

  @Metadata()
  security: SheetsSpreadsheetsValuesUpdateSecurity;
}


export class SheetsSpreadsheetsValuesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateValuesResponse?: shared.UpdateValuesResponse;
}
