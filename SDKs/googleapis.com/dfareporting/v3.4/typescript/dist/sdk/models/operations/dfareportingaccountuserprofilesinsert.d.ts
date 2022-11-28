import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountUserProfilesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountUserProfilesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountUserProfilesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountUserProfilesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountUserProfilesInsertPathParams;
    queryParams: DfareportingAccountUserProfilesInsertQueryParams;
    request?: shared.AccountUserProfile;
    security: DfareportingAccountUserProfilesInsertSecurity;
}
export declare class DfareportingAccountUserProfilesInsertResponse extends SpeakeasyBase {
    accountUserProfile?: shared.AccountUserProfile;
    contentType: string;
    statusCode: number;
}
