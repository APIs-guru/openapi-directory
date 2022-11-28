import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsSheetsCopyToPathParams extends SpeakeasyBase {
    sheetId: number;
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsSheetsCopyToQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsSheetsCopyToSecurityOption1;
    option2?: SheetsSpreadsheetsSheetsCopyToSecurityOption2;
    option3?: SheetsSpreadsheetsSheetsCopyToSecurityOption3;
}
export declare class SheetsSpreadsheetsSheetsCopyToRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsSheetsCopyToPathParams;
    queryParams: SheetsSpreadsheetsSheetsCopyToQueryParams;
    request?: shared.CopySheetToAnotherSpreadsheetRequest;
    security: SheetsSpreadsheetsSheetsCopyToSecurity;
}
export declare class SheetsSpreadsheetsSheetsCopyToResponse extends SpeakeasyBase {
    contentType: string;
    sheetProperties?: shared.SheetProperties;
    statusCode: number;
}
