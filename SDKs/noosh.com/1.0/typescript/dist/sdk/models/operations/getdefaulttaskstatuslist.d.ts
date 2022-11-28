import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDefaultTaskStatusListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetDefaultTaskStatusListRequest extends SpeakeasyBase {
    pathParams: GetDefaultTaskStatusListPathParams;
}
export declare class GetDefaultTaskStatusListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskStatusListVo?: any;
}
