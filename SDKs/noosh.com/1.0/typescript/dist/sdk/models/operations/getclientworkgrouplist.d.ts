import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetClientWorkgroupListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetClientWorkgroupListRequest extends SpeakeasyBase {
    pathParams: GetClientWorkgroupListPathParams;
}
export declare class GetClientWorkgroupListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientWorkgroupListVo?: any;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
