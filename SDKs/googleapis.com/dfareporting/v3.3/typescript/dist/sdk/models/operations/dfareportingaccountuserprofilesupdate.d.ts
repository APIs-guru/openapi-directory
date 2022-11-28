import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountUserProfilesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountUserProfilesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountUserProfilesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountUserProfilesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountUserProfilesUpdatePathParams;
    queryParams: DfareportingAccountUserProfilesUpdateQueryParams;
    request?: shared.AccountUserProfile;
    security: DfareportingAccountUserProfilesUpdateSecurity;
}
export declare class DfareportingAccountUserProfilesUpdateResponse extends SpeakeasyBase {
    accountUserProfile?: shared.AccountUserProfile;
    contentType: string;
    statusCode: number;
}
