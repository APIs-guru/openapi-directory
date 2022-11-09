import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesAliasesDeletePathParams extends SpeakeasyBase {
    alias: string;
    courseId: string;
}
export declare class ClassroomCoursesAliasesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesAliasesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesAliasesDeleteRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesAliasesDeletePathParams;
    queryParams: ClassroomCoursesAliasesDeleteQueryParams;
    security: ClassroomCoursesAliasesDeleteSecurity;
}
export declare class ClassroomCoursesAliasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
