import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesGetPathParams extends SpeakeasyBase {
    range: string;
    spreadsheetId: string;
}
export declare enum SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum SheetsSpreadsheetsValuesGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
export declare enum SheetsSpreadsheetsValuesGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare class SheetsSpreadsheetsValuesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dateTimeRenderOption?: SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum;
    fields?: string;
    key?: string;
    majorDimension?: SheetsSpreadsheetsValuesGetMajorDimensionEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    valueRenderOption?: SheetsSpreadsheetsValuesGetValueRenderOptionEnum;
}
export declare class SheetsSpreadsheetsValuesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesGetSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesGetSecurityOption1;
    option2?: SheetsSpreadsheetsValuesGetSecurityOption2;
    option3?: SheetsSpreadsheetsValuesGetSecurityOption3;
    option4?: SheetsSpreadsheetsValuesGetSecurityOption4;
    option5?: SheetsSpreadsheetsValuesGetSecurityOption5;
}
export declare class SheetsSpreadsheetsValuesGetRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesGetPathParams;
    queryParams: SheetsSpreadsheetsValuesGetQueryParams;
    security: SheetsSpreadsheetsValuesGetSecurity;
}
export declare class SheetsSpreadsheetsValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    valueRange?: shared.ValueRange;
}
