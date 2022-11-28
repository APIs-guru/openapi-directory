import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams;
    queryParams: SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams;
    request?: shared.BatchUpdateValuesByDataFilterRequest;
    security: SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse extends SpeakeasyBase {
    batchUpdateValuesByDataFilterResponse?: shared.BatchUpdateValuesByDataFilterResponse;
    contentType: string;
    statusCode: number;
}
