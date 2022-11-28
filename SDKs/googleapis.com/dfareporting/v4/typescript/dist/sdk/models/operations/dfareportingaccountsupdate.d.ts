import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountsUpdatePathParams;
    queryParams: DfareportingAccountsUpdateQueryParams;
    request?: shared.Account;
    security: DfareportingAccountsUpdateSecurity;
}
export declare class DfareportingAccountsUpdateResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
