import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAliasesListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesAliasesListQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAliasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAliasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAliasesListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesAliasesListSecurityOption1;
    option2?: ClassroomCoursesAliasesListSecurityOption2;
}
export declare class ClassroomCoursesAliasesListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAliasesListPathParams;
    queryParams: ClassroomCoursesAliasesListQueryParams;
    security: ClassroomCoursesAliasesListSecurity;
}
export declare class ClassroomCoursesAliasesListResponse extends SpeakeasyBase {
    contentType: string;
    listCourseAliasesResponse?: shared.ListCourseAliasesResponse;
    statusCode: number;
}
