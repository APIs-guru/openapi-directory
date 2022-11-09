import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesTeachersListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesTeachersListQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesTeachersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesTeachersListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesTeachersListSecurityOption1;
    option2?: ClassroomCoursesTeachersListSecurityOption2;
    option3?: ClassroomCoursesTeachersListSecurityOption3;
    option4?: ClassroomCoursesTeachersListSecurityOption4;
}
export declare class ClassroomCoursesTeachersListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesTeachersListPathParams;
    queryParams: ClassroomCoursesTeachersListQueryParams;
    security: ClassroomCoursesTeachersListSecurity;
}
export declare class ClassroomCoursesTeachersListResponse extends SpeakeasyBase {
    contentType: string;
    listTeachersResponse?: shared.ListTeachersResponse;
    statusCode: number;
}
