import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskPriorityListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class TaskPriorityListRequest extends SpeakeasyBase {
    pathParams: TaskPriorityListPathParams;
}
export declare class TaskPriorityListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskPriorityListVo?: any;
}
