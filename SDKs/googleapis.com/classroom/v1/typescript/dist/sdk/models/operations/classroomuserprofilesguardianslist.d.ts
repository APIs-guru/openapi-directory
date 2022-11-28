import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardiansListPathParams extends SpeakeasyBase {
    studentId: string;
}
export declare class ClassroomUserProfilesGuardiansListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomUserProfilesGuardiansListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansListSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardiansListSecurityOption1;
    option2?: ClassroomUserProfilesGuardiansListSecurityOption2;
    option3?: ClassroomUserProfilesGuardiansListSecurityOption3;
}
export declare class ClassroomUserProfilesGuardiansListRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardiansListPathParams;
    queryParams: ClassroomUserProfilesGuardiansListQueryParams;
    security: ClassroomUserProfilesGuardiansListSecurity;
}
export declare class ClassroomUserProfilesGuardiansListResponse extends SpeakeasyBase {
    contentType: string;
    listGuardiansResponse?: shared.ListGuardiansResponse;
    statusCode: number;
}
