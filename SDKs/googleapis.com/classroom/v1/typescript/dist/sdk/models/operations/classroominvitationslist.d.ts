import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomInvitationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    courseId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userId?: string;
}
export declare class ClassroomInvitationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomInvitationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomInvitationsListSecurity extends SpeakeasyBase {
    option1?: ClassroomInvitationsListSecurityOption1;
    option2?: ClassroomInvitationsListSecurityOption2;
}
export declare class ClassroomInvitationsListRequest extends SpeakeasyBase {
    queryParams: ClassroomInvitationsListQueryParams;
    security: ClassroomInvitationsListSecurity;
}
export declare class ClassroomInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    statusCode: number;
}
