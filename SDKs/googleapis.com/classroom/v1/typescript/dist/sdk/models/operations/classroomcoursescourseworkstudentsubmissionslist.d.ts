import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
}
export declare enum ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum {
    LateValuesUnspecified = "LATE_VALUES_UNSPECIFIED",
    LateOnly = "LATE_ONLY",
    NotLateOnly = "NOT_LATE_ONLY"
}
export declare enum ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED",
    New = "NEW",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    late?: ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    states?: ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    userId?: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;
    option3?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;
    option4?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;
    option5?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;
    option6?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsListPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams;
    security: ClassroomCoursesCourseWorkStudentSubmissionsListSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListResponse extends SpeakeasyBase {
    contentType: string;
    listStudentSubmissionsResponse?: shared.ListStudentSubmissionsResponse;
    statusCode: number;
}
