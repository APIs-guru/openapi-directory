import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWorkgroupDetailPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetWorkgroupDetailRequest extends SpeakeasyBase {
    pathParams: GetWorkgroupDetailPathParams;
}
export declare class GetWorkgroupDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupExpandVo?: any;
}
