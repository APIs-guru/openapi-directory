import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesStudentsGetPathParams extends SpeakeasyBase {
    courseId: string;
    userId: string;
}
export declare class ClassroomCoursesStudentsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesStudentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesStudentsGetSecurityOption1;
    option2?: ClassroomCoursesStudentsGetSecurityOption2;
    option3?: ClassroomCoursesStudentsGetSecurityOption3;
    option4?: ClassroomCoursesStudentsGetSecurityOption4;
}
export declare class ClassroomCoursesStudentsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesStudentsGetPathParams;
    queryParams: ClassroomCoursesStudentsGetQueryParams;
    security: ClassroomCoursesStudentsGetSecurity;
}
export declare class ClassroomCoursesStudentsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    student?: shared.Student;
}
