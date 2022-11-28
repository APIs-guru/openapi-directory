import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TagmanagerAccountsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsUpdatePathParams;
    queryParams: TagmanagerAccountsUpdateQueryParams;
    request?: shared.Account;
    security: TagmanagerAccountsUpdateSecurity;
}
export declare class TagmanagerAccountsUpdateResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
