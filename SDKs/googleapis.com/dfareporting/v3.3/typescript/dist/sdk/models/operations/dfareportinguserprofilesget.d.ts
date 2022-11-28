import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserProfilesGetPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserProfilesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesGetSecurity extends SpeakeasyBase {
    option1?: DfareportingUserProfilesGetSecurityOption1;
    option2?: DfareportingUserProfilesGetSecurityOption2;
    option3?: DfareportingUserProfilesGetSecurityOption3;
}
export declare class DfareportingUserProfilesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingUserProfilesGetPathParams;
    queryParams: DfareportingUserProfilesGetQueryParams;
    security: DfareportingUserProfilesGetSecurity;
}
export declare class DfareportingUserProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userProfile?: shared.UserProfile;
}
