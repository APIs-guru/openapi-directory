import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksQueryParams extends SpeakeasyBase {
    isEnabled?: boolean;
    isHidden?: boolean;
}
export declare class GetTasksSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTasksRequest extends SpeakeasyBase {
    queryParams: GetTasksQueryParams;
    security: GetTasksSecurity;
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskInfos?: shared.TaskInfo[];
}
