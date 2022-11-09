import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAliasesCreatePathParams extends SpeakeasyBase {
    courseId: string;
}
export declare class ClassroomCoursesAliasesCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAliasesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAliasesCreateRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAliasesCreatePathParams;
    queryParams: ClassroomCoursesAliasesCreateQueryParams;
    request?: shared.CourseAlias;
    security: ClassroomCoursesAliasesCreateSecurity;
}
export declare class ClassroomCoursesAliasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    courseAlias?: shared.CourseAlias;
    statusCode: number;
}
