import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClassroomCoursesUpdateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesUpdateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesUpdatePathParams;
    queryParams: ClassroomCoursesUpdateQueryParams;
    request?: shared.Course;
    security: ClassroomCoursesUpdateSecurity;
}
export declare class ClassroomCoursesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    course?: shared.Course;
    statusCode: number;
}
