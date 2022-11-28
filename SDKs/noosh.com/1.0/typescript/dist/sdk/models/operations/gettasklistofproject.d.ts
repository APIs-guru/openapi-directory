import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaskListOfProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetTaskListOfProjectRequest extends SpeakeasyBase {
    pathParams: GetTaskListOfProjectPathParams;
}
export declare class GetTaskListOfProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskListVo?: any;
}
