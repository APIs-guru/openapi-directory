import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkPatchPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkPatchQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkPatchRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkPatchPathParams;
    queryParams: ClassroomCoursesCourseWorkPatchQueryParams;
    request?: shared.CourseWork;
    security: ClassroomCoursesCourseWorkPatchSecurity;
}
export declare class ClassroomCoursesCourseWorkPatchResponse extends SpeakeasyBase {
    contentType: string;
    courseWork?: shared.CourseWork;
    statusCode: number;
}
