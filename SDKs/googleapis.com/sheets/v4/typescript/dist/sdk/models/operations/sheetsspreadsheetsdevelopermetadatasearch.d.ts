import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsDeveloperMetadataSearchPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1;
    option2?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2;
    option3?: SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsDeveloperMetadataSearchPathParams;
    queryParams: SheetsSpreadsheetsDeveloperMetadataSearchQueryParams;
    request?: shared.SearchDeveloperMetadataRequest;
    security: SheetsSpreadsheetsDeveloperMetadataSearchSecurity;
}
export declare class SheetsSpreadsheetsDeveloperMetadataSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchDeveloperMetadataResponse?: shared.SearchDeveloperMetadataResponse;
    statusCode: number;
}
