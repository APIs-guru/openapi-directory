import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchGetPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare enum SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
export declare enum SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare class SheetsSpreadsheetsValuesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dateTimeRenderOption?: SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;
    fields?: string;
    key?: string;
    majorDimension?: SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    ranges?: string[];
    uploadType?: string;
    uploadProtocol?: string;
    valueRenderOption?: SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchGetSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchGetSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchGetSecurityOption3;
    option4?: SheetsSpreadsheetsValuesBatchGetSecurityOption4;
    option5?: SheetsSpreadsheetsValuesBatchGetSecurityOption5;
}
export declare class SheetsSpreadsheetsValuesBatchGetRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchGetPathParams;
    queryParams: SheetsSpreadsheetsValuesBatchGetQueryParams;
    security: SheetsSpreadsheetsValuesBatchGetSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchGetResponse extends SpeakeasyBase {
    batchGetValuesResponse?: shared.BatchGetValuesResponse;
    contentType: string;
    statusCode: number;
}
