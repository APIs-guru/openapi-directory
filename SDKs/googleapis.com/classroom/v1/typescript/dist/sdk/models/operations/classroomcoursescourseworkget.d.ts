import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkGetPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkGetSecurityOption1;
    option2?: ClassroomCoursesCourseWorkGetSecurityOption2;
    option3?: ClassroomCoursesCourseWorkGetSecurityOption3;
    option4?: ClassroomCoursesCourseWorkGetSecurityOption4;
}
export declare class ClassroomCoursesCourseWorkGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkGetPathParams;
    queryParams: ClassroomCoursesCourseWorkGetQueryParams;
    security: ClassroomCoursesCourseWorkGetSecurity;
}
export declare class ClassroomCoursesCourseWorkGetResponse extends SpeakeasyBase {
    contentType: string;
    courseWork?: shared.CourseWork;
    statusCode: number;
}
