import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsGetaccessiblegmbaccountsPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentLiasettingsGetaccessiblegmbaccountsQueryParams extends SpeakeasyBase {
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
export declare class ContentLiasettingsGetaccessiblegmbaccountsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsGetaccessiblegmbaccountsRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsGetaccessiblegmbaccountsPathParams;
    queryParams: ContentLiasettingsGetaccessiblegmbaccountsQueryParams;
    security: ContentLiasettingsGetaccessiblegmbaccountsSecurity;
}
export declare class ContentLiasettingsGetaccessiblegmbaccountsResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsGetAccessibleGmbAccountsResponse?: shared.LiasettingsGetAccessibleGmbAccountsResponse;
    statusCode: number;
}
