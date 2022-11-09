import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams;
    request?: shared.StudentSubmission;
    security: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studentSubmission?: shared.StudentSubmission;
}
