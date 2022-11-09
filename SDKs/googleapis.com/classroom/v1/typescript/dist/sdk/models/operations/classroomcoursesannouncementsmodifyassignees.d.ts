import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAnnouncementsModifyAssigneesPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesAnnouncementsModifyAssigneesQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAnnouncementsModifyAssigneesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAnnouncementsModifyAssigneesRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAnnouncementsModifyAssigneesPathParams;
    queryParams: ClassroomCoursesAnnouncementsModifyAssigneesQueryParams;
    request?: shared.ModifyAnnouncementAssigneesRequest;
    security: ClassroomCoursesAnnouncementsModifyAssigneesSecurity;
}
export declare class ClassroomCoursesAnnouncementsModifyAssigneesResponse extends SpeakeasyBase {
    announcement?: shared.Announcement;
    contentType: string;
    statusCode: number;
}
