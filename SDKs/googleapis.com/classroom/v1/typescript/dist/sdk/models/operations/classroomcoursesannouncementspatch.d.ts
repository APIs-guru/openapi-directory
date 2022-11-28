import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAnnouncementsPatchPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesAnnouncementsPatchQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAnnouncementsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsPatchRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAnnouncementsPatchPathParams;
    queryParams: ClassroomCoursesAnnouncementsPatchQueryParams;
    request?: shared.Announcement;
    security: ClassroomCoursesAnnouncementsPatchSecurity;
}
export declare class ClassroomCoursesAnnouncementsPatchResponse extends SpeakeasyBase {
    announcement?: shared.Announcement;
    contentType: string;
    statusCode: number;
}
