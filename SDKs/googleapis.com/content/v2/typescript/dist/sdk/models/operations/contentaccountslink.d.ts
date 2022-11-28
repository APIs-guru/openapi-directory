import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsLinkPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsLinkQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsLinkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsLinkRequest extends SpeakeasyBase {
    pathParams: ContentAccountsLinkPathParams;
    queryParams: ContentAccountsLinkQueryParams;
    request?: shared.AccountsLinkRequest;
    security: ContentAccountsLinkSecurity;
}
export declare class ContentAccountsLinkResponse extends SpeakeasyBase {
    accountsLinkResponse?: shared.AccountsLinkResponse;
    contentType: string;
    statusCode: number;
}
