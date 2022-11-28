import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// DeleteServersId200ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class DeleteServersId200ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteServersId200ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum DeleteServersId200ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class DeleteServersId200ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: DeleteServersId200ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: DeleteServersId200ApplicationJsonActionResources })
  resources: DeleteServersId200ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: DeleteServersId200ApplicationJsonActionStatusEnum;
}


export class DeleteServersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: DeleteServersId200ApplicationJsonAction;
}


export class DeleteServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServersIdPathParams;
}


export class DeleteServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteServersId200ApplicationJsonObject?: DeleteServersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
