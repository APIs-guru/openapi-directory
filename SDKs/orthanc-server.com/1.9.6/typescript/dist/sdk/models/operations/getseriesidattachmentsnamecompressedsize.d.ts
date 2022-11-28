import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdAttachmentsNameCompressedSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedSizeRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameCompressedSizePathParams;
    headers: GetSeriesIdAttachmentsNameCompressedSizeHeaders;
}
export declare class GetSeriesIdAttachmentsNameCompressedSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
