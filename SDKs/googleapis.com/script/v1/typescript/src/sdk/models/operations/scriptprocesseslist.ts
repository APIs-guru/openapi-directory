import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ScriptProcessesListUserProcessFilterStatusesEnum {
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

export enum ScriptProcessesListUserProcessFilterTypesEnum {
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

export enum ScriptProcessesListUserProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}


export class ScriptProcessesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.deploymentId" })
  userProcessFilterDeploymentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.endTime" })
  userProcessFilterEndTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.functionName" })
  userProcessFilterFunctionName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.projectName" })
  userProcessFilterProjectName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.scriptId" })
  userProcessFilterScriptId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.startTime" })
  userProcessFilterStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.statuses" })
  userProcessFilterStatuses?: ScriptProcessesListUserProcessFilterStatusesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.types" })
  userProcessFilterTypes?: ScriptProcessesListUserProcessFilterTypesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.userAccessLevels" })
  userProcessFilterUserAccessLevels?: ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[];
}


export class ScriptProcessesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProcessesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ScriptProcessesListQueryParams;

  @SpeakeasyMetadata()
  security: ScriptProcessesListSecurity;
}


export class ScriptProcessesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUserProcessesResponse?: shared.ListUserProcessesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
