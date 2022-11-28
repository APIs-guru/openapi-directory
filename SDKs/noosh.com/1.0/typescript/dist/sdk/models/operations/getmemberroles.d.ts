import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMemberRolesPathParams extends SpeakeasyBase {
    projectId: string;
    userId: string;
    workgroupId: string;
}
export declare class GetMemberRolesRequest extends SpeakeasyBase {
    pathParams: GetMemberRolesPathParams;
}
export declare class GetMemberRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    roleListVo?: any;
    statusCode: number;
}
