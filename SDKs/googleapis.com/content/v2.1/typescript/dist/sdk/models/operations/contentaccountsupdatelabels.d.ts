import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsUpdatelabelsPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsUpdatelabelsQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsUpdatelabelsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsUpdatelabelsRequest extends SpeakeasyBase {
    pathParams: ContentAccountsUpdatelabelsPathParams;
    queryParams: ContentAccountsUpdatelabelsQueryParams;
    request?: shared.AccountsUpdateLabelsRequest;
    security: ContentAccountsUpdatelabelsSecurity;
}
export declare class ContentAccountsUpdatelabelsResponse extends SpeakeasyBase {
    accountsUpdateLabelsResponse?: shared.AccountsUpdateLabelsResponse;
    contentType: string;
    statusCode: number;
}
