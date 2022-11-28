import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsDeveloperMetadataGetPathParams extends SpeakeasyBase {
    metadataId: number;
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1;
    option2?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2;
    option3?: SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsDeveloperMetadataGetPathParams;
    queryParams: SheetsSpreadsheetsDeveloperMetadataGetQueryParams;
    security: SheetsSpreadsheetsDeveloperMetadataGetSecurity;
}
export declare class SheetsSpreadsheetsDeveloperMetadataGetResponse extends SpeakeasyBase {
    contentType: string;
    developerMetadata?: shared.DeveloperMetadata;
    statusCode: number;
}
