import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomCoursesCourseWorkStudentSubmissionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" })
  courseWorkId: string;
}

export enum ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum {
    LateValuesUnspecified = "LATE_VALUES_UNSPECIFIED"
,    LateOnly = "LATE_ONLY"
,    NotLateOnly = "NOT_LATE_ONLY"
}

export enum ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED"
,    New = "NEW"
,    Created = "CREATED"
,    TurnedIn = "TURNED_IN"
,    Returned = "RETURNED"
,    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=late" })
  late?: ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomCoursesCourseWorkStudentSubmissionsListPathParams;

  @Metadata()
  queryParams: ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams;

  @Metadata()
  security: ClassroomCoursesCourseWorkStudentSubmissionsListSecurity;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listStudentSubmissionsResponse?: shared.ListStudentSubmissionsResponse;

  @Metadata()
  statusCode: number;
}
