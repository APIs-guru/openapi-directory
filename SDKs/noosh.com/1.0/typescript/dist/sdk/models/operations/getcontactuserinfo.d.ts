import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContactUserInfoPathParams extends SpeakeasyBase {
    userId: string;
    workgroupId: string;
}
export declare class GetContactUserInfoRequest extends SpeakeasyBase {
    pathParams: GetContactUserInfoPathParams;
}
export declare class GetContactUserInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    userDetailsExpandVo?: any;
}
