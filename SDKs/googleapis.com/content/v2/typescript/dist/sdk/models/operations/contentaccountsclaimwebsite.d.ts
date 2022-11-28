import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsClaimwebsitePathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsClaimwebsiteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    overwrite?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentAccountsClaimwebsiteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsClaimwebsiteRequest extends SpeakeasyBase {
    pathParams: ContentAccountsClaimwebsitePathParams;
    queryParams: ContentAccountsClaimwebsiteQueryParams;
    security: ContentAccountsClaimwebsiteSecurity;
}
export declare class ContentAccountsClaimwebsiteResponse extends SpeakeasyBase {
    accountsClaimWebsiteResponse?: shared.AccountsClaimWebsiteResponse;
    contentType: string;
    statusCode: number;
}
