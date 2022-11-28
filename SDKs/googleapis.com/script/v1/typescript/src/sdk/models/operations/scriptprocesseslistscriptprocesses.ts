import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Unknown = "UNKNOWN",
    Delayed = "DELAYED"
}

export enum ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED",
    AddOn = "ADD_ON",
    ExecutionApi = "EXECUTION_API",
    TimeDriven = "TIME_DRIVEN",
    Trigger = "TRIGGER",
    Webapp = "WEBAPP",
    Editor = "EDITOR",
    SimpleTrigger = "SIMPLE_TRIGGER",
    Menu = "MENU",
    BatchTask = "BATCH_TASK"
}

export enum ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}


export class ScriptProcessesListScriptProcessesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.deploymentId" })
  scriptProcessFilterDeploymentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.endTime" })
  scriptProcessFilterEndTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.functionName" })
  scriptProcessFilterFunctionName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.startTime" })
  scriptProcessFilterStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.statuses" })
  scriptProcessFilterStatuses?: ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.types" })
  scriptProcessFilterTypes?: ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.userAccessLevels" })
  scriptProcessFilterUserAccessLevels?: ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ScriptProcessesListScriptProcessesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProcessesListScriptProcessesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ScriptProcessesListScriptProcessesQueryParams;

  @SpeakeasyMetadata()
  security: ScriptProcessesListScriptProcessesSecurity;
}


export class ScriptProcessesListScriptProcessesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listScriptProcessesResponse?: shared.ListScriptProcessesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
