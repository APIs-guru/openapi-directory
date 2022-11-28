import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAnnouncementsCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesAnnouncementsCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAnnouncementsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAnnouncementsCreatePathParams;
    queryParams: ClassroomCoursesAnnouncementsCreateQueryParams;
    request?: shared.Announcement;
    security: ClassroomCoursesAnnouncementsCreateSecurity;
}
export declare class ClassroomCoursesAnnouncementsCreateResponse extends SpeakeasyBase {
    announcement?: shared.Announcement;
    contentType: string;
    statusCode: number;
}
