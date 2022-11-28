import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SheetsSpreadsheetsCreateQueryParams extends SpeakeasyBase {
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
export declare class SheetsSpreadsheetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SheetsSpreadsheetsCreateSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsCreateSecurityOption1;
    option2?: SheetsSpreadsheetsCreateSecurityOption2;
    option3?: SheetsSpreadsheetsCreateSecurityOption3;
}
export declare class SheetsSpreadsheetsCreateRequest extends SpeakeasyBase {
    queryParams: SheetsSpreadsheetsCreateQueryParams;
    request?: shared.SpreadsheetInput;
    security: SheetsSpreadsheetsCreateSecurity;
}
export declare class SheetsSpreadsheetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    spreadsheet?: shared.Spreadsheet;
    statusCode: number;
}
