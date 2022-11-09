import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdAttachmentsNameCompressedSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedSizeRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameCompressedSizePathParams;
    headers: GetStudiesIdAttachmentsNameCompressedSizeHeaders;
}
export declare class GetStudiesIdAttachmentsNameCompressedSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
