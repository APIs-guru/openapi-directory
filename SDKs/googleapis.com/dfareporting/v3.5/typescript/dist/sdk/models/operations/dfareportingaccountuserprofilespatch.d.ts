import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountUserProfilesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountUserProfilesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAccountUserProfilesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountUserProfilesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountUserProfilesPatchPathParams;
    queryParams: DfareportingAccountUserProfilesPatchQueryParams;
    request?: shared.AccountUserProfile;
    security: DfareportingAccountUserProfilesPatchSecurity;
}
export declare class DfareportingAccountUserProfilesPatchResponse extends SpeakeasyBase {
    accountUserProfile?: shared.AccountUserProfile;
    contentType: string;
    statusCode: number;
}
