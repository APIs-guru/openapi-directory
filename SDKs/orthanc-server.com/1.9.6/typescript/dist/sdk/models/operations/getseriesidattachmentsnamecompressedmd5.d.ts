import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameCompressedMd5PathParams;
    headers: GetSeriesIdAttachmentsNameCompressedMd5Headers;
}
export declare class GetSeriesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
