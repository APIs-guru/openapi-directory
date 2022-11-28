import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams;
    queryParams: SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams;
    request?: shared.BatchClearValuesByDataFilterRequest;
    security: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchClearByDataFilterResponse extends SpeakeasyBase {
    batchClearValuesByDataFilterResponse?: shared.BatchClearValuesByDataFilterResponse;
    contentType: string;
    statusCode: number;
}
