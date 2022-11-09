import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsLocationsJobsMessagesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
,    JobMessageDebug = "JOB_MESSAGE_DEBUG"
,    JobMessageDetailed = "JOB_MESSAGE_DETAILED"
,    JobMessageBasic = "JOB_MESSAGE_BASIC"
,    JobMessageWarning = "JOB_MESSAGE_WARNING"
,    JobMessageError = "JOB_MESSAGE_ERROR"
}


export class DataflowProjectsLocationsJobsMessagesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minimumImportance" })
  minimumImportance?: DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataflowProjectsLocationsJobsMessagesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsMessagesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsMessagesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsMessagesListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsMessagesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsJobsMessagesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsJobsMessagesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsJobsMessagesListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsJobsMessagesListSecurityOption4;
}


export class DataflowProjectsLocationsJobsMessagesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsLocationsJobsMessagesListPathParams;

  @Metadata()
  queryParams: DataflowProjectsLocationsJobsMessagesListQueryParams;

  @Metadata()
  security: DataflowProjectsLocationsJobsMessagesListSecurity;
}


export class DataflowProjectsLocationsJobsMessagesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listJobMessagesResponse?: shared.ListJobMessagesResponse;

  @Metadata()
  statusCode: number;
}
