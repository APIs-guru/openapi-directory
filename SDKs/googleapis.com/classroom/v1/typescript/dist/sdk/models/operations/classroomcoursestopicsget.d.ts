import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTopicsGetPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesTopicsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTopicsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTopicsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTopicsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesTopicsGetSecurityOption1;
    option2?: ClassroomCoursesTopicsGetSecurityOption2;
}
export declare class ClassroomCoursesTopicsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTopicsGetPathParams;
    queryParams: ClassroomCoursesTopicsGetQueryParams;
    security: ClassroomCoursesTopicsGetSecurity;
}
export declare class ClassroomCoursesTopicsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
