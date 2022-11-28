import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassroomCoursesCourseWorkMaterialsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;
}

export enum ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}


export class ClassroomCoursesCourseWorkMaterialsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=courseWorkMaterialStates" })
  courseWorkMaterialStates?: ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=materialDriveId" })
  materialDriveId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=materialLink" })
  materialLink?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkMaterialsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
}


export class ClassroomCoursesCourseWorkMaterialsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassroomCoursesCourseWorkMaterialsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClassroomCoursesCourseWorkMaterialsListQueryParams;

  @SpeakeasyMetadata()
  security: ClassroomCoursesCourseWorkMaterialsListSecurity;
}


export class ClassroomCoursesCourseWorkMaterialsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCourseWorkMaterialResponse?: shared.ListCourseWorkMaterialResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
