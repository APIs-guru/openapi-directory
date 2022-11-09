import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTopicsCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesTopicsCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTopicsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTopicsCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTopicsCreatePathParams;
    queryParams: ClassroomCoursesTopicsCreateQueryParams;
    request?: shared.Topic;
    security: ClassroomCoursesTopicsCreateSecurity;
}
export declare class ClassroomCoursesTopicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
