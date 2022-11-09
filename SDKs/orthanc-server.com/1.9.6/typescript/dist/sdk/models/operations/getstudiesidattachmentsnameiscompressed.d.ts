import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameIsCompressedPathParams;
    headers: GetStudiesIdAttachmentsNameIsCompressedHeaders;
}
export declare class GetStudiesIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
