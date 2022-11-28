import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardianInvitationsGetPathParams extends SpeakeasyBase {
    invitationId: string;
    studentId: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardianInvitationsGetSecurityOption1;
    option2?: ClassroomUserProfilesGuardianInvitationsGetSecurityOption2;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardianInvitationsGetPathParams;
    queryParams: ClassroomUserProfilesGuardianInvitationsGetQueryParams;
    security: ClassroomUserProfilesGuardianInvitationsGetSecurity;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetResponse extends SpeakeasyBase {
    contentType: string;
    guardianInvitation?: shared.GuardianInvitation;
    statusCode: number;
}
