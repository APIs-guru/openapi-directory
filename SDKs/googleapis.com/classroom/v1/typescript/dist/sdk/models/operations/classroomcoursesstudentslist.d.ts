import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesStudentsListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesStudentsListQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesStudentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesStudentsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesStudentsListSecurityOption1;
    option2?: ClassroomCoursesStudentsListSecurityOption2;
    option3?: ClassroomCoursesStudentsListSecurityOption3;
    option4?: ClassroomCoursesStudentsListSecurityOption4;
}
export declare class ClassroomCoursesStudentsListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesStudentsListPathParams;
    queryParams: ClassroomCoursesStudentsListQueryParams;
    security: ClassroomCoursesStudentsListSecurity;
}
export declare class ClassroomCoursesStudentsListResponse extends SpeakeasyBase {
    contentType: string;
    listStudentsResponse?: shared.ListStudentsResponse;
    statusCode: number;
}
