import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaskTypesOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetTaskTypesOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetTaskTypesOfWorkgroupPathParams;
}
export declare class GetTaskTypesOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskTypeListVo?: any;
}
