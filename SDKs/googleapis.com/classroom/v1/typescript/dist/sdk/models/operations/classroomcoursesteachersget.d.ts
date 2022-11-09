import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTeachersGetPathParams extends SpeakeasyBase {
    courseId: string;
    userId: string;
}
export declare class ClassroomCoursesTeachersGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTeachersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesTeachersGetSecurityOption1;
    option2?: ClassroomCoursesTeachersGetSecurityOption2;
    option3?: ClassroomCoursesTeachersGetSecurityOption3;
    option4?: ClassroomCoursesTeachersGetSecurityOption4;
}
export declare class ClassroomCoursesTeachersGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTeachersGetPathParams;
    queryParams: ClassroomCoursesTeachersGetQueryParams;
    security: ClassroomCoursesTeachersGetSecurity;
}
export declare class ClassroomCoursesTeachersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teacher?: shared.Teacher;
}
