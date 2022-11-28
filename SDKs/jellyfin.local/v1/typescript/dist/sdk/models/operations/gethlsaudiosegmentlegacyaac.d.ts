import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHlsAudioSegmentLegacyAacPathParams extends SpeakeasyBase {
    itemId: string;
    segmentId: string;
}
export declare class GetHlsAudioSegmentLegacyAacRequest extends SpeakeasyBase {
    pathParams: GetHlsAudioSegmentLegacyAacPathParams;
}
export declare class GetHlsAudioSegmentLegacyAacResponse extends SpeakeasyBase {
    contentType: string;
    getHlsAudioSegmentLegacyAac200AudioWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
