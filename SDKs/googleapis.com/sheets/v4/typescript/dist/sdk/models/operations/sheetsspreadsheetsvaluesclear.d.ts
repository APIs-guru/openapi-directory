import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsValuesClearPathParams extends SpeakeasyBase {
    range: string;
    spreadsheetId: string;
}
export declare class SheetsSpreadsheetsValuesClearQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsValuesClearSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesClearSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesClearSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsValuesClearSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesClearSecurityOption1;
    option2?: SheetsSpreadsheetsValuesClearSecurityOption2;
    option3?: SheetsSpreadsheetsValuesClearSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesClearRequest extends SpeakeasyBase {
    pathParams: SheetsSpreadsheetsValuesClearPathParams;
    queryParams: SheetsSpreadsheetsValuesClearQueryParams;
    request?: Map<string, any>;
    security: SheetsSpreadsheetsValuesClearSecurity;
}
export declare class SheetsSpreadsheetsValuesClearResponse extends SpeakeasyBase {
    clearValuesResponse?: shared.ClearValuesResponse;
    contentType: string;
    statusCode: number;
}
