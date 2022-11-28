import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsBatchUpdatePathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsBatchUpdateSecurityOption1;
    option2?: SheetsSpreadsheetsBatchUpdateSecurityOption2;
    option3?: SheetsSpreadsheetsBatchUpdateSecurityOption3;
}
export declare class SheetsSpreadsheetsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsBatchUpdatePathParams;
    queryParams: SheetsSpreadsheetsBatchUpdateQueryParams;
    request?: shared.BatchUpdateSpreadsheetRequest;
    security: SheetsSpreadsheetsBatchUpdateSecurity;
}
export declare class SheetsSpreadsheetsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateSpreadsheetResponse?: shared.BatchUpdateSpreadsheetResponse;
    contentType: string;
    statusCode: number;
}
