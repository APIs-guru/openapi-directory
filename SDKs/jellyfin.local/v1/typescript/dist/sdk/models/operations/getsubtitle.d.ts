import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubtitlePathParams extends SpeakeasyBase {
    format: string;
    index: number;
    itemId: string;
    mediaSourceId: string;
}
export declare class GetSubtitleQueryParams extends SpeakeasyBase {
    addVttTimeMap?: boolean;
    copyTimestamps?: boolean;
    endPositionTicks?: number;
    startPositionTicks?: number;
}
export declare class GetSubtitleRequest extends SpeakeasyBase {
    pathParams: GetSubtitlePathParams;
    queryParams: GetSubtitleQueryParams;
}
export declare class GetSubtitleResponse extends SpeakeasyBase {
    contentType: string;
    getSubtitle200TextWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
