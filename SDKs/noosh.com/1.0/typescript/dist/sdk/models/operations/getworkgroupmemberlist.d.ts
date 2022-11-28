import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWorkgroupMemberListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetWorkgroupMemberListRequest extends SpeakeasyBase {
    pathParams: GetWorkgroupMemberListPathParams;
}
export declare class GetWorkgroupMemberListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupMembersListVo?: any;
}
