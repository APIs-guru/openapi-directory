import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class UpdateTaskRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos?: shared.TaskTriggerInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos1?: shared.TaskTriggerInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos2?: shared.TaskTriggerInfo[];
}


export class UpdateTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTaskPathParams;

  @SpeakeasyMetadata()
  request: UpdateTaskRequests;

  @SpeakeasyMetadata()
  security: UpdateTaskSecurity;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
