import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFilesPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetFilesRequest extends SpeakeasyBase {
    pathParams: GetFilesPathParams;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileResponseVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
