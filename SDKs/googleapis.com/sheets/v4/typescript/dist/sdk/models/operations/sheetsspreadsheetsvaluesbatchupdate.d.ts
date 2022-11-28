import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchUpdatePathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchUpdateSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchUpdateSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchUpdateSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchUpdatePathParams;
    queryParams: SheetsSpreadsheetsValuesBatchUpdateQueryParams;
    request?: shared.BatchUpdateValuesRequest;
    security: SheetsSpreadsheetsValuesBatchUpdateSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateValuesResponse?: shared.BatchUpdateValuesResponse;
    contentType: string;
    statusCode: number;
}
