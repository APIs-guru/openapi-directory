import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClassroomCoursesGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesGetSecurityOption1;
    option2?: ClassroomCoursesGetSecurityOption2;
}
export declare class ClassroomCoursesGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesGetPathParams;
    queryParams: ClassroomCoursesGetQueryParams;
    security: ClassroomCoursesGetSecurity;
}
export declare class ClassroomCoursesGetResponse extends SpeakeasyBase {
    contentType: string;
    course?: shared.Course;
    statusCode: number;
}
