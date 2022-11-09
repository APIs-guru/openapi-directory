import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameCompressedDataPathParams;
    headers: GetSeriesIdAttachmentsNameCompressedDataHeaders;
}
export declare class GetSeriesIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
