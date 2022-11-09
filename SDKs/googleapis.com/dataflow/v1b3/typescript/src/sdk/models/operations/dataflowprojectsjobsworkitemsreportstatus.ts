import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsJobsWorkItemsReportStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsJobsWorkItemsReportStatusQueryParams extends SpeakeasyBase {
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


export class DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsWorkItemsReportStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption4;
}


export class DataflowProjectsJobsWorkItemsReportStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsJobsWorkItemsReportStatusPathParams;

  @Metadata()
  queryParams: DataflowProjectsJobsWorkItemsReportStatusQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ReportWorkItemStatusRequest;

  @Metadata()
  security: DataflowProjectsJobsWorkItemsReportStatusSecurity;
}


export class DataflowProjectsJobsWorkItemsReportStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportWorkItemStatusResponse?: shared.ReportWorkItemStatusResponse;

  @Metadata()
  statusCode: number;
}
