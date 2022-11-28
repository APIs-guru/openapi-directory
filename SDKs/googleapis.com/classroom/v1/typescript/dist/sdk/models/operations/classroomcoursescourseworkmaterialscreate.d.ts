import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkMaterialsCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkMaterialsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkMaterialsCreatePathParams;
    queryParams: ClassroomCoursesCourseWorkMaterialsCreateQueryParams;
    request?: shared.CourseWorkMaterial;
    security: ClassroomCoursesCourseWorkMaterialsCreateSecurity;
}
export declare class ClassroomCoursesCourseWorkMaterialsCreateResponse extends SpeakeasyBase {
    contentType: string;
    courseWorkMaterial?: shared.CourseWorkMaterial;
    statusCode: number;
}
