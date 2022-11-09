import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFloatingIpsIdActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetFloatingIpsIdActionsSortParameterSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Command = "command"
,    CommandAsc = "command:asc"
,    CommandDesc = "command:desc"
,    Status = "status"
,    StatusAsc = "status:asc"
,    StatusDesc = "status:desc"
,    Progress = "progress"
,    ProgressAsc = "progress:asc"
,    ProgressDesc = "progress:desc"
,    Started = "started"
,    StartedAsc = "started:asc"
,    StartedDesc = "started:desc"
,    Finished = "finished"
,    FinishedAsc = "finished:asc"
,    FinishedDesc = "finished:desc"
}

export enum GetFloatingIpsIdActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetFloatingIpsIdActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFloatingIpsIdActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetFloatingIpsIdActionsStatusParameterStatusEnum;
}


export class GetFloatingIpsIdActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFloatingIpsIdActionsPathParams;

  @Metadata()
  queryParams: GetFloatingIpsIdActionsQueryParams;
}


// GetFloatingIpsIdActions200ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFloatingIpsIdActions200ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetFloatingIpsIdActions200ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetFloatingIpsIdActions200ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetFloatingIpsIdActions200ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetFloatingIpsIdActions200ApplicationJsonActionResources })
  resources: GetFloatingIpsIdActions200ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum;
}


export class GetFloatingIpsIdActions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetFloatingIpsIdActions200ApplicationJsonAction })
  actions: GetFloatingIpsIdActions200ApplicationJsonAction[];
}


export class GetFloatingIpsIdActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFloatingIpsIdActions200ApplicationJsonObject?: GetFloatingIpsIdActions200ApplicationJson;

  @Metadata()
  statusCode: number;
}
