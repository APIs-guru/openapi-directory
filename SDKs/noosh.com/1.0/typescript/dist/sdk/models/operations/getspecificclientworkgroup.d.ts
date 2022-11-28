import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecificClientWorkgroupPathParams extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetSpecificClientWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetSpecificClientWorkgroupPathParams;
}
export declare class GetSpecificClientWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientWorkgroupExpandVo?: any;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
