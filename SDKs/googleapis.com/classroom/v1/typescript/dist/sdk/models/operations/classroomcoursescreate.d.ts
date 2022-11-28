import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCreateRequest extends SpeakeasyBase {
    queryParams: ClassroomCoursesCreateQueryParams;
    request?: shared.Course;
    security: ClassroomCoursesCreateSecurity;
}
export declare class ClassroomCoursesCreateResponse extends SpeakeasyBase {
    contentType: string;
    course?: shared.Course;
    statusCode: number;
}
