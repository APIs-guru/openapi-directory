import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsListlinksPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsListlinksQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentAccountsListlinksSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsListlinksRequest extends SpeakeasyBase {
    pathParams: ContentAccountsListlinksPathParams;
    queryParams: ContentAccountsListlinksQueryParams;
    security: ContentAccountsListlinksSecurity;
}
export declare class ContentAccountsListlinksResponse extends SpeakeasyBase {
    accountsListLinksResponse?: shared.AccountsListLinksResponse;
    contentType: string;
    statusCode: number;
}
