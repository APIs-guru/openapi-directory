import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ClassroomCoursesListCourseStatesEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Provisioned = "PROVISIONED",
    Declined = "DECLINED",
    Suspended = "SUSPENDED"
}
export declare class ClassroomCoursesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    courseStates?: ClassroomCoursesListCourseStatesEnum[];
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    studentId?: string;
    teacherId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesListSecurityOption1;
    option2?: ClassroomCoursesListSecurityOption2;
}
export declare class ClassroomCoursesListRequest extends SpeakeasyBase {
    queryParams: ClassroomCoursesListQueryParams;
    security: ClassroomCoursesListSecurity;
}
export declare class ClassroomCoursesListResponse extends SpeakeasyBase {
    contentType: string;
    listCoursesResponse?: shared.ListCoursesResponse;
    statusCode: number;
}
