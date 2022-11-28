import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFilePathParams extends SpeakeasyBase {
    fileId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetFileRequest extends SpeakeasyBase {
    pathParams: GetFilePathParams;
}
export declare class GetFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileResponseVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
