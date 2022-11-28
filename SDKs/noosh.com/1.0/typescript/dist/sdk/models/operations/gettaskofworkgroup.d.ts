import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaskOfWorkgroupPathParams extends SpeakeasyBase {
    taskId: string;
    workgroupId: string;
}
export declare class GetTaskOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetTaskOfWorkgroupPathParams;
}
export declare class GetTaskOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskExpandWorkgroupLevelVo?: any;
}
