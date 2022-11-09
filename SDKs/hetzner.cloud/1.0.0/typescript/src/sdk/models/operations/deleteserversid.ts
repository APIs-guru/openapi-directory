import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServersIdPathParams;
}


// DeleteServersId200ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class DeleteServersId200ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class DeleteServersId200ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum DeleteServersId200ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class DeleteServersId200ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: DeleteServersId200ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.DeleteServersId200ApplicationJsonActionResources })
  resources: DeleteServersId200ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: DeleteServersId200ApplicationJsonActionStatusEnum;
}


export class DeleteServersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: DeleteServersId200ApplicationJsonAction;
}


export class DeleteServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteServersId200ApplicationJsonObject?: DeleteServersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
