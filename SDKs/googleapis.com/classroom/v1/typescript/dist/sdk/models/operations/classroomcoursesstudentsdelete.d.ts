import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesStudentsDeletePathParams extends SpeakeasyBase {
    courseId: string;
    userId: string;
}
export declare class ClassroomCoursesStudentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesStudentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsDeleteRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesStudentsDeletePathParams;
    queryParams: ClassroomCoursesStudentsDeleteQueryParams;
    security: ClassroomCoursesStudentsDeleteSecurity;
}
export declare class ClassroomCoursesStudentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
