import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaskOfProjectPathParams extends SpeakeasyBase {
    projectId: string;
    taskId: string;
    workgroupId: string;
}
export declare class GetTaskOfProjectRequest extends SpeakeasyBase {
    pathParams: GetTaskOfProjectPathParams;
}
export declare class GetTaskOfProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskExpandVo?: any;
}
