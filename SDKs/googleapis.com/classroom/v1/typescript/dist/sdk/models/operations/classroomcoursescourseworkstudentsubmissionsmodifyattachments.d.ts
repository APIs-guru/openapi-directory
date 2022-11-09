import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams extends SpeakeasyBase {
    courseId: string;
    courseWorkId: string;
    id: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams extends SpeakeasyBase {
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
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams;
    queryParams: ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams;
    request?: shared.ModifyAttachmentsRequest;
    security: ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studentSubmission?: shared.StudentSubmission;
}
