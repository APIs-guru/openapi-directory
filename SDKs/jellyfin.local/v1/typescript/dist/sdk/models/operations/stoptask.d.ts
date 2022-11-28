import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StopTaskSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class StopTaskRequest extends SpeakeasyBase {
    pathParams: StopTaskPathParams;
    security: StopTaskSecurity;
}
export declare class StopTaskResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
