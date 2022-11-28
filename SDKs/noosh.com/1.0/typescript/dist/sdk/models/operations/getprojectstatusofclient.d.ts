import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectStatusOfClientPathParams extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetProjectStatusOfClientRequest extends SpeakeasyBase {
    pathParams: GetProjectStatusOfClientPathParams;
}
export declare class GetProjectStatusOfClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectStatusListVo?: any;
    statusCode: number;
}
