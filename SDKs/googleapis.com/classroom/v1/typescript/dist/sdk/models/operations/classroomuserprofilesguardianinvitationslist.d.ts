import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardianInvitationsListPathParams extends SpeakeasyBase {
    studentId: string;
}
export declare enum ClassroomUserProfilesGuardianInvitationsListStatesEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}
export declare class ClassroomUserProfilesGuardianInvitationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    invitedEmailAddress?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    states?: ClassroomUserProfilesGuardianInvitationsListStatesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardianInvitationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardianInvitationsListSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardianInvitationsListSecurityOption1;
    option2?: ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
}
export declare class ClassroomUserProfilesGuardianInvitationsListRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardianInvitationsListPathParams;
    queryParams: ClassroomUserProfilesGuardianInvitationsListQueryParams;
    security: ClassroomUserProfilesGuardianInvitationsListSecurity;
}
export declare class ClassroomUserProfilesGuardianInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listGuardianInvitationsResponse?: shared.ListGuardianInvitationsResponse;
    statusCode: number;
}
