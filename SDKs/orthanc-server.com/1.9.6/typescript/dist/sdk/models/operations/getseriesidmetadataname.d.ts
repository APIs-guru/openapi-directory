import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdMetadataNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdMetadataNamePathParams;
    headers: GetSeriesIdMetadataNameHeaders;
}
export declare class GetSeriesIdMetadataNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
