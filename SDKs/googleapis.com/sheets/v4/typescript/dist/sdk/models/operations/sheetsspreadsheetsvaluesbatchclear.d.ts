import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchClearPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesBatchClearQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesBatchClearSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchClearSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchClearSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchClearSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesBatchClearRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchClearPathParams;
    queryParams: SheetsSpreadsheetsValuesBatchClearQueryParams;
    request?: shared.BatchClearValuesRequest;
    security: SheetsSpreadsheetsValuesBatchClearSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchClearResponse extends SpeakeasyBase {
    batchClearValuesResponse?: shared.BatchClearValuesResponse;
    contentType: string;
    statusCode: number;
}
