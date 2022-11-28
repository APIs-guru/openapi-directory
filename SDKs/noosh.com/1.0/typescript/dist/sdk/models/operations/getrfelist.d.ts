import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRfeListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetRfeListRequest extends SpeakeasyBase {
    pathParams: GetRfeListPathParams;
}
export declare class GetRfeListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    rfeListVo?: any;
    statusCode: number;
}
