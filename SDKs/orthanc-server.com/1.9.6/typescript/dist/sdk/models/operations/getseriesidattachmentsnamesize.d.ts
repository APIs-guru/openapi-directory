import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameSizePathParams;
    headers: GetSeriesIdAttachmentsNameSizeHeaders;
}
export declare class GetSeriesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
