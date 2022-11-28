import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesCourseWorkCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkCreatePathParams;
    queryParams: ClassroomCoursesCourseWorkCreateQueryParams;
    request?: shared.CourseWork;
    security: ClassroomCoursesCourseWorkCreateSecurity;
}
export declare class ClassroomCoursesCourseWorkCreateResponse extends SpeakeasyBase {
    contentType: string;
    courseWork?: shared.CourseWork;
    statusCode: number;
}
