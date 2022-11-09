import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum {
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

export enum ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum {
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

export enum ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Read = "READ"
,    Write = "WRITE"
,    Owner = "OWNER"
}


export class ScriptProcessesListScriptProcessesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.deploymentId" })
  scriptProcessFilterDeploymentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.endTime" })
  scriptProcessFilterEndTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.functionName" })
  scriptProcessFilterFunctionName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.startTime" })
  scriptProcessFilterStartTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.statuses" })
  scriptProcessFilterStatuses?: ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.types" })
  scriptProcessFilterTypes?: ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.userAccessLevels" })
  scriptProcessFilterUserAccessLevels?: ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ScriptProcessesListScriptProcessesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProcessesListScriptProcessesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ScriptProcessesListScriptProcessesQueryParams;

  @Metadata()
  security: ScriptProcessesListScriptProcessesSecurity;
}


export class ScriptProcessesListScriptProcessesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listScriptProcessesResponse?: shared.ListScriptProcessesResponse;

  @Metadata()
  statusCode: number;
}
