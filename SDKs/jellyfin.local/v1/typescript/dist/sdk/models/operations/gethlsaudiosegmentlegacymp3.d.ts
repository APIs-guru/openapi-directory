import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHlsAudioSegmentLegacyMp3PathParams extends SpeakeasyBase {
    itemId: string;
    segmentId: string;
}
export declare class GetHlsAudioSegmentLegacyMp3Request extends SpeakeasyBase {
    pathParams: GetHlsAudioSegmentLegacyMp3PathParams;
}
export declare class GetHlsAudioSegmentLegacyMp3Response extends SpeakeasyBase {
    contentType: string;
    getHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
