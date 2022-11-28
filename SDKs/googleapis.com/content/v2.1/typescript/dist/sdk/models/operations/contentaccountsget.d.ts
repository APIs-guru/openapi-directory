import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsGetPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare enum ContentAccountsGetViewEnum {
    Merchant = "MERCHANT",
    Css = "CSS"
}
export declare class ContentAccountsGetQueryParams extends SpeakeasyBase {
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
    view?: ContentAccountsGetViewEnum;
}
export declare class ContentAccountsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsGetRequest extends SpeakeasyBase {
    pathParams: ContentAccountsGetPathParams;
    queryParams: ContentAccountsGetQueryParams;
    security: ContentAccountsGetSecurity;
}
export declare class ContentAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
