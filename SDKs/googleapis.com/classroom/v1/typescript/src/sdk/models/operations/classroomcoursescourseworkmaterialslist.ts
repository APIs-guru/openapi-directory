import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomCoursesCourseWorkMaterialsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;
}

export enum ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Draft = "DRAFT"
,    Deleted = "DELETED"
}


export class ClassroomCoursesCourseWorkMaterialsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=courseWorkMaterialStates" })
  courseWorkMaterialStates?: ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=materialDriveId" })
  materialDriveId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=materialLink" })
  materialLink?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkMaterialsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
}


export class ClassroomCoursesCourseWorkMaterialsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomCoursesCourseWorkMaterialsListPathParams;

  @Metadata()
  queryParams: ClassroomCoursesCourseWorkMaterialsListQueryParams;

  @Metadata()
  security: ClassroomCoursesCourseWorkMaterialsListSecurity;
}


export class ClassroomCoursesCourseWorkMaterialsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCourseWorkMaterialResponse?: shared.ListCourseWorkMaterialResponse;

  @Metadata()
  statusCode: number;
}
