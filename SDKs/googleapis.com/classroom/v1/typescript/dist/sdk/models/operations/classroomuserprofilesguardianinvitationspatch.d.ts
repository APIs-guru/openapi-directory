import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardianInvitationsPatchPathParams extends SpeakeasyBase {
    invitationId: string;
    studentId: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardianInvitationsPatchRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardianInvitationsPatchPathParams;
    queryParams: ClassroomUserProfilesGuardianInvitationsPatchQueryParams;
    request?: shared.GuardianInvitation;
    security: ClassroomUserProfilesGuardianInvitationsPatchSecurity;
}
export declare class ClassroomUserProfilesGuardianInvitationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    guardianInvitation?: shared.GuardianInvitation;
    statusCode: number;
}
