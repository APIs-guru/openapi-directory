import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkModifyAssigneesPathParams extends SpeakeasyBase {
    courseId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkModifyAssigneesQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkModifyAssigneesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkModifyAssigneesRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkModifyAssigneesPathParams;
    queryParams: ClassroomCoursesCourseWorkModifyAssigneesQueryParams;
    request?: shared.ModifyCourseWorkAssigneesRequest;
    security: ClassroomCoursesCourseWorkModifyAssigneesSecurity;
}
export declare class ClassroomCoursesCourseWorkModifyAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    courseWork?: shared.CourseWork;
    statusCode: number;
}
