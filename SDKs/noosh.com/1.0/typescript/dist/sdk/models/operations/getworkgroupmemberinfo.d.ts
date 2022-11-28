import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWorkgroupMemberInfoPathParams extends SpeakeasyBase {
    userId: string;
    workgroupId: string;
}
export declare class GetWorkgroupMemberInfoRequest extends SpeakeasyBase {
    pathParams: GetWorkgroupMemberInfoPathParams;
}
export declare class GetWorkgroupMemberInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    userDetailsExpandVo?: any;
}
