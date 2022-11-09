import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTopicsListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesTopicsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesTopicsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTopicsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTopicsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesTopicsListSecurityOption1;
    option2?: ClassroomCoursesTopicsListSecurityOption2;
}
export declare class ClassroomCoursesTopicsListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTopicsListPathParams;
    queryParams: ClassroomCoursesTopicsListQueryParams;
    security: ClassroomCoursesTopicsListSecurity;
}
export declare class ClassroomCoursesTopicsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicResponse?: shared.ListTopicResponse;
    statusCode: number;
}
