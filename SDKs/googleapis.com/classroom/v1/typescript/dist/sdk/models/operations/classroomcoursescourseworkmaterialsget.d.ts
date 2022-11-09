import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkMaterialsGetPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
    option2?: ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
}
export declare class ClassroomCoursesCourseWorkMaterialsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkMaterialsGetPathParams;
    queryParams: ClassroomCoursesCourseWorkMaterialsGetQueryParams;
    security: ClassroomCoursesCourseWorkMaterialsGetSecurity;
}
export declare class ClassroomCoursesCourseWorkMaterialsGetResponse extends SpeakeasyBase {
    contentType: string;
    courseWorkMaterial?: shared.CourseWorkMaterial;
    statusCode: number;
}
