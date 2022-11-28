import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams extends SpeakeasyBase {
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams;
    queryParams: SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams;
    request?: shared.BatchGetValuesByDataFilterRequest;
    security: SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity;
}
export declare class SheetsSpreadsheetsValuesBatchGetByDataFilterResponse extends SpeakeasyBase {
    batchGetValuesByDataFilterResponse?: shared.BatchGetValuesByDataFilterResponse;
    contentType: string;
    statusCode: number;
}
