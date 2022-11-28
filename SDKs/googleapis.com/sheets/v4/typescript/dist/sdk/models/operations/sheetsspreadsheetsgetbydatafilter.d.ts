import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsGetByDataFilterPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsGetByDataFilterQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SheetsSpreadsheetsGetByDataFilterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetByDataFilterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetByDataFilterSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetByDataFilterSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsGetByDataFilterSecurityOption1;
    option2?: SheetsSpreadsheetsGetByDataFilterSecurityOption2;
    option3?: SheetsSpreadsheetsGetByDataFilterSecurityOption3;
}
export declare class SheetsSpreadsheetsGetByDataFilterRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsGetByDataFilterPathParams;
    queryParams: SheetsSpreadsheetsGetByDataFilterQueryParams;
    request?: shared.GetSpreadsheetByDataFilterRequest;
    security: SheetsSpreadsheetsGetByDataFilterSecurity;
}
export declare class SheetsSpreadsheetsGetByDataFilterResponse extends SpeakeasyBase {
    contentType: string;
    spreadsheet?: shared.Spreadsheet;
    statusCode: number;
}
