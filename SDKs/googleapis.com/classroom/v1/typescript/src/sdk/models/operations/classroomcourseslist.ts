import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ClassroomCoursesListCourseStatesEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Provisioned = "PROVISIONED"
,    Declined = "DECLINED"
,    Suspended = "SUSPENDED"
}


export class ClassroomCoursesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=courseStates" })
  courseStates?: ClassroomCoursesListCourseStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=studentId" })
  studentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=teacherId" })
  teacherId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomCoursesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesListSecurityOption2;
}


export class ClassroomCoursesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClassroomCoursesListQueryParams;

  @Metadata()
  security: ClassroomCoursesListSecurity;
}


export class ClassroomCoursesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCoursesResponse?: shared.ListCoursesResponse;

  @Metadata()
  statusCode: number;
}
