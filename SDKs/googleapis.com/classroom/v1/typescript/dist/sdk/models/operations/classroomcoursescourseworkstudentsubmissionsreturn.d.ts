import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams;
    request?: Map<string, any>;
    security: ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
