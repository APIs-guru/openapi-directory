import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameCompressedDataPathParams;
    headers: GetStudiesIdAttachmentsNameCompressedDataHeaders;
}
export declare class GetStudiesIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
