import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class UpdateTaskRequests extends SpeakeasyBase {
    taskTriggerInfos?: shared.TaskTriggerInfo[];
    taskTriggerInfos1?: shared.TaskTriggerInfo[];
    taskTriggerInfos2?: shared.TaskTriggerInfo[];
}
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    pathParams: UpdateTaskPathParams;
    request: UpdateTaskRequests;
    security: UpdateTaskSecurity;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
