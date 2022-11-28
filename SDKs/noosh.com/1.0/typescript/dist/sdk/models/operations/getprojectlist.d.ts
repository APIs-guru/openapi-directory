import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectListRequest extends SpeakeasyBase {
    pathParams: GetProjectListPathParams;
}
export declare class GetProjectListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectListVo?: any;
    statusCode: number;
}
