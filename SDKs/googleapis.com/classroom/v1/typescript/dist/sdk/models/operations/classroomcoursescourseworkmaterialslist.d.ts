import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomCoursesCourseWorkMaterialsListPathParams extends SpeakeasyBase {
    courseId: string;
}
export declare enum ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
export declare class ClassroomCoursesCourseWorkMaterialsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    courseWorkMaterialStates?: ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum[];
    fields?: string;
    key?: string;
    materialDriveId?: string;
    materialLink?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomCoursesCourseWorkMaterialsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkMaterialsListSecurityOption1;
    option2?: ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
}
export declare class ClassroomCoursesCourseWorkMaterialsListRequest extends SpeakeasyBase {
    pathParams: ClassroomCoursesCourseWorkMaterialsListPathParams;
    queryParams: ClassroomCoursesCourseWorkMaterialsListQueryParams;
    security: ClassroomCoursesCourseWorkMaterialsListSecurity;
}
export declare class ClassroomCoursesCourseWorkMaterialsListResponse extends SpeakeasyBase {
    contentType: string;
    listCourseWorkMaterialResponse?: shared.ListCourseWorkMaterialResponse;
    statusCode: number;
}
