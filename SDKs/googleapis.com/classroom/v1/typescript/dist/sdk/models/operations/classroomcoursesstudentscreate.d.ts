import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesStudentsCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesStudentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    enrollmentCode?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesStudentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsCreateSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesStudentsCreateSecurityOption1;
    option2?: ClassroomCoursesStudentsCreateSecurityOption2;
    option3?: ClassroomCoursesStudentsCreateSecurityOption3;
}
export declare class ClassroomCoursesStudentsCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesStudentsCreatePathParams;
    queryParams: ClassroomCoursesStudentsCreateQueryParams;
    request?: shared.Student;
    security: ClassroomCoursesStudentsCreateSecurity;
}
export declare class ClassroomCoursesStudentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    student?: shared.Student;
}
