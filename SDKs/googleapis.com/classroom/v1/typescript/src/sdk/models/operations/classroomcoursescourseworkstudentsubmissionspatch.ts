import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" })
  courseWorkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams;

  @Metadata()
  queryParams: ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.StudentSubmission;

  @Metadata()
  security: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity;
}


export class ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentSubmission?: shared.StudentSubmission;
}
