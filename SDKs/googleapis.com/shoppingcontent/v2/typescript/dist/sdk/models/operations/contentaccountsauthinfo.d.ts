import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsAuthinfoQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsAuthinfoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsAuthinfoRequest extends SpeakeasyBase {
    queryParams: ContentAccountsAuthinfoQueryParams;
    security: ContentAccountsAuthinfoSecurity;
}
export declare class ContentAccountsAuthinfoResponse extends SpeakeasyBase {
    accountsAuthInfoResponse?: shared.AccountsAuthInfoResponse;
    contentType: string;
    statusCode: number;
}
