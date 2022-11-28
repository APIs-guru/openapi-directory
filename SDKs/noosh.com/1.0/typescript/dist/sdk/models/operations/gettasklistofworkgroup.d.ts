import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaskListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetTaskListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetTaskListOfWorkgroupPathParams;
}
export declare class GetTaskListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskWorkgroupLevelListVo?: any;
}
