import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsJobsDebugGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsJobsDebugGetConfigQueryParams extends SpeakeasyBase {
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


export class DataflowProjectsJobsDebugGetConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugGetConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugGetConfigSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugGetConfigSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsDebugGetConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsJobsDebugGetConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsJobsDebugGetConfigSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsJobsDebugGetConfigSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsJobsDebugGetConfigSecurityOption4;
}


export class DataflowProjectsJobsDebugGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsJobsDebugGetConfigPathParams;

  @Metadata()
  queryParams: DataflowProjectsJobsDebugGetConfigQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GetDebugConfigRequest;

  @Metadata()
  security: DataflowProjectsJobsDebugGetConfigSecurity;
}


export class DataflowProjectsJobsDebugGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDebugConfigResponse?: shared.GetDebugConfigResponse;

  @Metadata()
  statusCode: number;
}
