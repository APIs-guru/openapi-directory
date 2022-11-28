import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesAppendPathParams extends SpeakeasyBase {
    range: string;
    spreadsheetId: string;
}
export declare enum SheetsSpreadsheetsValuesAppendInsertDataOptionEnum {
    Overwrite = "OVERWRITE",
    InsertRows = "INSERT_ROWS"
}
export declare enum SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare enum SheetsSpreadsheetsValuesAppendValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
export declare class SheetsSpreadsheetsValuesAppendQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeValuesInResponse?: boolean;
    insertDataOption?: SheetsSpreadsheetsValuesAppendInsertDataOptionEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    responseDateTimeRenderOption?: SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum;
    responseValueRenderOption?: SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum;
    uploadType?: string;
    uploadProtocol?: string;
    valueInputOption?: SheetsSpreadsheetsValuesAppendValueInputOptionEnum;
}
export declare class SheetsSpreadsheetsValuesAppendSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesAppendSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesAppendSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesAppendSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesAppendSecurityOption1;
    option2?: SheetsSpreadsheetsValuesAppendSecurityOption2;
    option3?: SheetsSpreadsheetsValuesAppendSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesAppendRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesAppendPathParams;
    queryParams: SheetsSpreadsheetsValuesAppendQueryParams;
    request?: shared.ValueRange;
    security: SheetsSpreadsheetsValuesAppendSecurity;
}
export declare class SheetsSpreadsheetsValuesAppendResponse extends SpeakeasyBase {
    appendValuesResponse?: shared.AppendValuesResponse;
    contentType: string;
    statusCode: number;
}
