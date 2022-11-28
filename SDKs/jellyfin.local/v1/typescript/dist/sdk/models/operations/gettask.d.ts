import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetTaskSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTaskRequest extends SpeakeasyBase {
    pathParams: GetTaskPathParams;
    security: GetTaskSecurity;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    taskInfo?: shared.TaskInfo;
}
