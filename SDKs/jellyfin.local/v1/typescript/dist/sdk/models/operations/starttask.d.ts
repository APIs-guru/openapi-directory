import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StartTaskSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class StartTaskRequest extends SpeakeasyBase {
    pathParams: StartTaskPathParams;
    security: StartTaskSecurity;
}
export declare class StartTaskResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
