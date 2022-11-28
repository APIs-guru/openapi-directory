import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassroomCoursesCourseWorkListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;
}

export enum ClassroomCoursesCourseWorkListCourseWorkStatesEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}


export class ClassroomCoursesCourseWorkListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=courseWorkStates" })
  courseWorkStates?: ClassroomCoursesCourseWorkListCourseWorkStatesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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


export class ClassroomCoursesCourseWorkListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: ClassroomCoursesCourseWorkListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: ClassroomCoursesCourseWorkListSecurityOption4;
}


export class ClassroomCoursesCourseWorkListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassroomCoursesCourseWorkListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClassroomCoursesCourseWorkListQueryParams;

  @SpeakeasyMetadata()
  security: ClassroomCoursesCourseWorkListSecurity;
}


export class ClassroomCoursesCourseWorkListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCourseWorkResponse?: shared.ListCourseWorkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
