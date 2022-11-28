import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAnnouncementsGetPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesAnnouncementsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAnnouncementsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesAnnouncementsGetSecurityOption1;
    option2?: ClassroomCoursesAnnouncementsGetSecurityOption2;
}
export declare class ClassroomCoursesAnnouncementsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAnnouncementsGetPathParams;
    queryParams: ClassroomCoursesAnnouncementsGetQueryParams;
    security: ClassroomCoursesAnnouncementsGetSecurity;
}
export declare class ClassroomCoursesAnnouncementsGetResponse extends SpeakeasyBase {
    announcement?: shared.Announcement;
    contentType: string;
    statusCode: number;
}
