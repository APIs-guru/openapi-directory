import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsInsertPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentAccountsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentAccountsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsInsertRequest extends SpeakeasyBase {
    pathParams: ContentAccountsInsertPathParams;
    queryParams: ContentAccountsInsertQueryParams;
    request?: shared.Account;
    security: ContentAccountsInsertSecurity;
}
export declare class ContentAccountsInsertResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
