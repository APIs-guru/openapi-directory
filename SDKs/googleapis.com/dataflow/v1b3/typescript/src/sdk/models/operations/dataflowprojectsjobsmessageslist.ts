import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataflowProjectsJobsMessagesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum DataflowProjectsJobsMessagesListMinimumImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}


export class DataflowProjectsJobsMessagesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimumImportance" })
  minimumImportance?: DataflowProjectsJobsMessagesListMinimumImportanceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataflowProjectsJobsMessagesListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsMessagesListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsMessagesListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsMessagesListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsJobsMessagesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DataflowProjectsJobsMessagesListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DataflowProjectsJobsMessagesListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DataflowProjectsJobsMessagesListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DataflowProjectsJobsMessagesListSecurityOption4;
}


export class DataflowProjectsJobsMessagesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataflowProjectsJobsMessagesListPathParams;

  @SpeakeasyMetadata()
  queryParams: DataflowProjectsJobsMessagesListQueryParams;

  @SpeakeasyMetadata()
  security: DataflowProjectsJobsMessagesListSecurity;
}


export class DataflowProjectsJobsMessagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listJobMessagesResponse?: shared.ListJobMessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
