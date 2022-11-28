import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentAccountsCustombatchQueryParams;
    request?: shared.AccountsCustomBatchRequest;
    security: ContentAccountsCustombatchSecurity;
}
export declare class ContentAccountsCustombatchResponse extends SpeakeasyBase {
    accountsCustomBatchResponse?: shared.AccountsCustomBatchResponse;
    contentType: string;
    statusCode: number;
}
