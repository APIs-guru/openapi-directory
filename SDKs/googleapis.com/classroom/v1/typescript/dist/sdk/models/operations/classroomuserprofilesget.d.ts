import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGetPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ClassroomUserProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomUserProfilesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGetSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGetSecurityOption1;
    option2?: ClassroomUserProfilesGetSecurityOption2;
    option3?: ClassroomUserProfilesGetSecurityOption3;
    option4?: ClassroomUserProfilesGetSecurityOption4;
}
export declare class ClassroomUserProfilesGetRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGetPathParams;
    queryParams: ClassroomUserProfilesGetQueryParams;
    security: ClassroomUserProfilesGetSecurity;
}
export declare class ClassroomUserProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userProfile?: shared.UserProfile;
}
