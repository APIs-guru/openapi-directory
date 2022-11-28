import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFloatingIpsIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetFloatingIpsIdActionsSortParameterSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Command = "command",
    CommandAsc = "command:asc",
    CommandDesc = "command:desc",
    Status = "status",
    StatusAsc = "status:asc",
    StatusDesc = "status:desc",
    Progress = "progress",
    ProgressAsc = "progress:asc",
    ProgressDesc = "progress:desc",
    Started = "started",
    StartedAsc = "started:asc",
    StartedDesc = "started:desc",
    Finished = "finished",
    FinishedAsc = "finished:asc",
    FinishedDesc = "finished:desc"
}

export enum GetFloatingIpsIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetFloatingIpsIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFloatingIpsIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetFloatingIpsIdActionsStatusParameterStatusEnum;
}


// GetFloatingIpsIdActions200ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFloatingIpsIdActions200ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetFloatingIpsIdActions200ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetFloatingIpsIdActions200ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetFloatingIpsIdActions200ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFloatingIpsIdActions200ApplicationJsonActionResources })
  resources: GetFloatingIpsIdActions200ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum;
}


export class GetFloatingIpsIdActions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetFloatingIpsIdActions200ApplicationJsonAction })
  actions: GetFloatingIpsIdActions200ApplicationJsonAction[];
}


export class GetFloatingIpsIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFloatingIpsIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFloatingIpsIdActionsQueryParams;
}


export class GetFloatingIpsIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFloatingIpsIdActions200ApplicationJsonObject?: GetFloatingIpsIdActions200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
