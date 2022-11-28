import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadFilePathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class UploadFileRequestBody extends SpeakeasyBase {
    content: Uint8Array;
    requestBody: string;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    pathParams: UploadFilePathParams;
    request?: UploadFileRequestBody;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileResponseVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
