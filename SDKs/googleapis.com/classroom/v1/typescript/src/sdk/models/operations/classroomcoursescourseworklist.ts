import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomCoursesCourseWorkListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;
}

export enum ClassroomCoursesCourseWorkListCourseWorkStatesEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Draft = "DRAFT"
,    Deleted = "DELETED"
}


export class ClassroomCoursesCourseWorkListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=courseWorkStates" })
  courseWorkStates?: ClassroomCoursesCourseWorkListCourseWorkStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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


export class ClassroomCoursesCourseWorkListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: ClassroomCoursesCourseWorkListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: ClassroomCoursesCourseWorkListSecurityOption4;
}


export class ClassroomCoursesCourseWorkListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomCoursesCourseWorkListPathParams;

  @Metadata()
  queryParams: ClassroomCoursesCourseWorkListQueryParams;

  @Metadata()
  security: ClassroomCoursesCourseWorkListSecurity;
}


export class ClassroomCoursesCourseWorkListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCourseWorkResponse?: shared.ListCourseWorkResponse;

  @Metadata()
  statusCode: number;
}
