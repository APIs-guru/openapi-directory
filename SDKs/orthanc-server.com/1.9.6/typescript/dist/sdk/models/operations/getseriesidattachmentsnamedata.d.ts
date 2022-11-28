import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdAttachmentsNameDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameDataRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameDataPathParams;
    headers: GetSeriesIdAttachmentsNameDataHeaders;
}
export declare class GetSeriesIdAttachmentsNameDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
