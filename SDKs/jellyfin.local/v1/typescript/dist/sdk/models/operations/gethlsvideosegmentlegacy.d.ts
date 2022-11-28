import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHlsVideoSegmentLegacyPathParams extends SpeakeasyBase {
    itemId: string;
    playlistId: string;
    segmentContainer: string;
    segmentId: string;
}
export declare class GetHlsVideoSegmentLegacyRequest extends SpeakeasyBase {
    pathParams: GetHlsVideoSegmentLegacyPathParams;
}
export declare class GetHlsVideoSegmentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    getHlsVideoSegmentLegacy200VideoWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
