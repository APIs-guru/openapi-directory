import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare enum ClassroomCoursesCourseWorkListCourseWorkStatesEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
export declare class ClassroomCoursesCourseWorkListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    courseWorkStates?: ClassroomCoursesCourseWorkListCourseWorkStatesEnum[];
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesCourseWorkListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkListSecurityOption1;
    option2?: ClassroomCoursesCourseWorkListSecurityOption2;
    option3?: ClassroomCoursesCourseWorkListSecurityOption3;
    option4?: ClassroomCoursesCourseWorkListSecurityOption4;
}
export declare class ClassroomCoursesCourseWorkListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkListPathParams;
    queryParams: ClassroomCoursesCourseWorkListQueryParams;
    security: ClassroomCoursesCourseWorkListSecurity;
}
export declare class ClassroomCoursesCourseWorkListResponse extends SpeakeasyBase {
    contentType: string;
    listCourseWorkResponse?: shared.ListCourseWorkResponse;
    statusCode: number;
}
