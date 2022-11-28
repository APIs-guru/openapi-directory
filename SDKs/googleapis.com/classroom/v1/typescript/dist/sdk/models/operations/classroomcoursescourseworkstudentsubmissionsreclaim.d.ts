import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams;
    request?: Map<string, any>;
    security: ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
