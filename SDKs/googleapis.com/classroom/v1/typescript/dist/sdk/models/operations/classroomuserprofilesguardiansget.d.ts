import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardiansGetPathParams extends SpeakeasyBase {
    guardianId: string;
    studentId: string;
}
export declare class ClassroomUserProfilesGuardiansGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomUserProfilesGuardiansGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansGetSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardiansGetSecurityOption1;
    option2?: ClassroomUserProfilesGuardiansGetSecurityOption2;
    option3?: ClassroomUserProfilesGuardiansGetSecurityOption3;
}
export declare class ClassroomUserProfilesGuardiansGetRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardiansGetPathParams;
    queryParams: ClassroomUserProfilesGuardiansGetQueryParams;
    security: ClassroomUserProfilesGuardiansGetSecurity;
}
export declare class ClassroomUserProfilesGuardiansGetResponse extends SpeakeasyBase {
    contentType: string;
    guardian?: shared.Guardian;
    statusCode: number;
}
