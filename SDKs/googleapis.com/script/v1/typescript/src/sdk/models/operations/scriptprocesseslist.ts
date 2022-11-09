import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ScriptProcessesListUserProcessFilterStatusesEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Completed = "COMPLETED"
,    Canceled = "CANCELED"
,    Failed = "FAILED"
,    TimedOut = "TIMED_OUT"
,    Unknown = "UNKNOWN"
,    Delayed = "DELAYED"
}

export enum ScriptProcessesListUserProcessFilterTypesEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED"
,    AddOn = "ADD_ON"
,    ExecutionApi = "EXECUTION_API"
,    TimeDriven = "TIME_DRIVEN"
,    Trigger = "TRIGGER"
,    Webapp = "WEBAPP"
,    Editor = "EDITOR"
,    SimpleTrigger = "SIMPLE_TRIGGER"
,    Menu = "MENU"
,    BatchTask = "BATCH_TASK"
}

export enum ScriptProcessesListUserProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Read = "READ"
,    Write = "WRITE"
,    Owner = "OWNER"
}


export class ScriptProcessesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.deploymentId" })
  userProcessFilterDeploymentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.endTime" })
  userProcessFilterEndTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.functionName" })
  userProcessFilterFunctionName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.projectName" })
  userProcessFilterProjectName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.scriptId" })
  userProcessFilterScriptId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.startTime" })
  userProcessFilterStartTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.statuses" })
  userProcessFilterStatuses?: ScriptProcessesListUserProcessFilterStatusesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.types" })
  userProcessFilterTypes?: ScriptProcessesListUserProcessFilterTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.userAccessLevels" })
  userProcessFilterUserAccessLevels?: ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[];
}


export class ScriptProcessesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProcessesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ScriptProcessesListQueryParams;

  @Metadata()
  security: ScriptProcessesListSecurity;
}


export class ScriptProcessesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUserProcessesResponse?: shared.ListUserProcessesResponse;

  @Metadata()
  statusCode: number;
}
