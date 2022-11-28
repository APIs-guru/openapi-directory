import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentAccountsUpdatePathParams;
    queryParams: ContentAccountsUpdateQueryParams;
    request?: shared.AccountInput;
    security: ContentAccountsUpdateSecurity;
}
export declare class ContentAccountsUpdateResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
