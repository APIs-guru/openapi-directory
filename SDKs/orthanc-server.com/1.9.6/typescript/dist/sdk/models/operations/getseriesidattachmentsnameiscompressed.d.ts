import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameIsCompressedPathParams;
    headers: GetSeriesIdAttachmentsNameIsCompressedHeaders;
}
export declare class GetSeriesIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
