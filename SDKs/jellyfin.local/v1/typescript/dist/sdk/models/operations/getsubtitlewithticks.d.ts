import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubtitleWithTicksPathParams extends SpeakeasyBase {
    format: string;
    index: number;
    itemId: string;
    mediaSourceId: string;
    startPositionTicks: number;
}
export declare class GetSubtitleWithTicksQueryParams extends SpeakeasyBase {
    addVttTimeMap?: boolean;
    copyTimestamps?: boolean;
    endPositionTicks?: number;
}
export declare class GetSubtitleWithTicksRequest extends SpeakeasyBase {
    pathParams: GetSubtitleWithTicksPathParams;
    queryParams: GetSubtitleWithTicksQueryParams;
}
export declare class GetSubtitleWithTicksResponse extends SpeakeasyBase {
    contentType: string;
    getSubtitleWithTicks200TextWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
