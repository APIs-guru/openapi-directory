import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsJobsDebugSendCapturePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsJobsDebugSendCaptureQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataflowProjectsJobsDebugSendCaptureSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugSendCaptureSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugSendCaptureSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugSendCaptureSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugSendCaptureSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsJobsDebugSendCaptureSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsJobsDebugSendCaptureSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsJobsDebugSendCaptureSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsJobsDebugSendCaptureSecurityOption4;
}


export class DataflowProjectsJobsDebugSendCaptureRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsJobsDebugSendCapturePathParams;

  @Metadata()
  queryParams: DataflowProjectsJobsDebugSendCaptureQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SendDebugCaptureRequest;

  @Metadata()
  security: DataflowProjectsJobsDebugSendCaptureSecurity;
}


export class DataflowProjectsJobsDebugSendCaptureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sendDebugCaptureResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
