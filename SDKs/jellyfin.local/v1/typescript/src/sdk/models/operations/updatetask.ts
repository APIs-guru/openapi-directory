import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class UpdateTaskRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos?: shared.TaskTriggerInfo[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos1?: shared.TaskTriggerInfo[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.TaskTriggerInfo })
  taskTriggerInfos2?: shared.TaskTriggerInfo[];
}


export class UpdateTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTaskPathParams;

  @Metadata()
  request: UpdateTaskRequests;

  @Metadata()
  security: UpdateTaskSecurity;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
