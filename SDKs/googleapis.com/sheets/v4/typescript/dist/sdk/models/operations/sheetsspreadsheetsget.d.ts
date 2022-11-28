import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsGetPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeGridData?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    ranges?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SheetsSpreadsheetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsGetSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsGetSecurityOption1;
    option2?: SheetsSpreadsheetsGetSecurityOption2;
    option3?: SheetsSpreadsheetsGetSecurityOption3;
    option4?: SheetsSpreadsheetsGetSecurityOption4;
    option5?: SheetsSpreadsheetsGetSecurityOption5;
}
export declare class SheetsSpreadsheetsGetRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsGetPathParams;
    queryParams: SheetsSpreadsheetsGetQueryParams;
    security: SheetsSpreadsheetsGetSecurity;
}
export declare class SheetsSpreadsheetsGetResponse extends SpeakeasyBase {
    contentType: string;
    spreadsheet?: shared.Spreadsheet;
    statusCode: number;
}
