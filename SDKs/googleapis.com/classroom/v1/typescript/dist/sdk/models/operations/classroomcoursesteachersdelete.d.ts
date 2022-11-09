import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTeachersDeletePathParams extends SpeakeasyBase {
    courseId: string;
    userId: string;
}
export declare class ClassroomCoursesTeachersDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTeachersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersDeleteRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTeachersDeletePathParams;
    queryParams: ClassroomCoursesTeachersDeleteQueryParams;
    security: ClassroomCoursesTeachersDeleteSecurity;
}
export declare class ClassroomCoursesTeachersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
