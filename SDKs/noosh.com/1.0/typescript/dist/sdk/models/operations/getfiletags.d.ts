import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFileTagsPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetFileTagsRequest extends SpeakeasyBase {
    pathParams: GetFileTagsPathParams;
}
export declare class GetFileTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileTagResponseVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
