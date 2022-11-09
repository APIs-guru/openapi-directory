import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesPatchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClassroomCoursesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesPatchRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesPatchPathParams;
    queryParams: ClassroomCoursesPatchQueryParams;
    request?: shared.Course;
    security: ClassroomCoursesPatchSecurity;
}
export declare class ClassroomCoursesPatchResponse extends SpeakeasyBase {
    contentType: string;
    course?: shared.Course;
    statusCode: number;
}
