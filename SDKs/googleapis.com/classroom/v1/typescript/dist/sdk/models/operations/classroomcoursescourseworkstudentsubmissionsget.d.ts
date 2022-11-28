import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2;
    option3?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3;
    option4?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4;
    option5?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5;
    option6?: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams;
    security: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studentSubmission?: shared.StudentSubmission;
}
