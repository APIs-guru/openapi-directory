import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTeachersCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesTeachersCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTeachersCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersCreateSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesTeachersCreateSecurityOption1;
    option2?: ClassroomCoursesTeachersCreateSecurityOption2;
    option3?: ClassroomCoursesTeachersCreateSecurityOption3;
}
export declare class ClassroomCoursesTeachersCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTeachersCreatePathParams;
    queryParams: ClassroomCoursesTeachersCreateQueryParams;
    request?: shared.Teacher;
    security: ClassroomCoursesTeachersCreateSecurity;
}
export declare class ClassroomCoursesTeachersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teacher?: shared.Teacher;
}
