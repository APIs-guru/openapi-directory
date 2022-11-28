import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkMaterialsDeletePathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkMaterialsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsDeleteRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkMaterialsDeletePathParams;
    queryParams: ClassroomCoursesCourseWorkMaterialsDeleteQueryParams;
    security: ClassroomCoursesCourseWorkMaterialsDeleteSecurity;
}
export declare class ClassroomCoursesCourseWorkMaterialsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
