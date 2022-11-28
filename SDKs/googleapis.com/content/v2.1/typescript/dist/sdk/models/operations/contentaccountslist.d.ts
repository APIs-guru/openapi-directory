import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare enum ContentAccountsListViewEnum {
    Merchant = "MERCHANT",
    Css = "CSS"
}
export declare class ContentAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    label?: string;
    maxResults?: number;
    name?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: ContentAccountsListViewEnum;
}
export declare class ContentAccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsListRequest extends SpeakeasyBase {
    pathParams: ContentAccountsListPathParams;
    queryParams: ContentAccountsListQueryParams;
    security: ContentAccountsListSecurity;
}
export declare class ContentAccountsListResponse extends SpeakeasyBase {
    accountsListResponse?: shared.AccountsListResponse;
    contentType: string;
    statusCode: number;
}
