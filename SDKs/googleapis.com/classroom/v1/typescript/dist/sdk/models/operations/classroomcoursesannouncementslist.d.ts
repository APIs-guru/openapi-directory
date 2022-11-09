import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAnnouncementsListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare enum ClassroomCoursesAnnouncementsListAnnouncementStatesEnum {
    AnnouncementStateUnspecified = "ANNOUNCEMENT_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
export declare class ClassroomCoursesAnnouncementsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    announcementStates?: ClassroomCoursesAnnouncementsListAnnouncementStatesEnum[];
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesAnnouncementsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesAnnouncementsListSecurityOption1;
    option2?: ClassroomCoursesAnnouncementsListSecurityOption2;
}
export declare class ClassroomCoursesAnnouncementsListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAnnouncementsListPathParams;
    queryParams: ClassroomCoursesAnnouncementsListQueryParams;
    security: ClassroomCoursesAnnouncementsListSecurity;
}
export declare class ClassroomCoursesAnnouncementsListResponse extends SpeakeasyBase {
    contentType: string;
    listAnnouncementsResponse?: shared.ListAnnouncementsResponse;
    statusCode: number;
}
