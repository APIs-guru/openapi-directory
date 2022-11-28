import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesUpdatePathParams extends SpeakeasyBase {
    range: string;
    spreadsheetId: string;
}
export declare enum SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare enum SheetsSpreadsheetsValuesUpdateValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
export declare class SheetsSpreadsheetsValuesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeValuesInResponse?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    responseDateTimeRenderOption?: SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum;
    responseValueRenderOption?: SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum;
    uploadType?: string;
    uploadProtocol?: string;
    valueInputOption?: SheetsSpreadsheetsValuesUpdateValueInputOptionEnum;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesUpdateSecurityOption1;
    option2?: SheetsSpreadsheetsValuesUpdateSecurityOption2;
    option3?: SheetsSpreadsheetsValuesUpdateSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesUpdateRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesUpdatePathParams;
    queryParams: SheetsSpreadsheetsValuesUpdateQueryParams;
    request?: shared.ValueRange;
    security: SheetsSpreadsheetsValuesUpdateSecurity;
}
export declare class SheetsSpreadsheetsValuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateValuesResponse?: shared.UpdateValuesResponse;
}
