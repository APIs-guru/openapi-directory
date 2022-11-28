import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHlsVideoSegmentPathParams extends SpeakeasyBase {
    container: string;
    itemId: string;
    playlistId: string;
    segmentId: number;
}
export declare class GetHlsVideoSegmentQueryParams extends SpeakeasyBase {
    allowAudioStreamCopy?: boolean;
    allowVideoStreamCopy?: boolean;
    audioBitRate?: number;
    audioChannels?: number;
    audioCodec?: string;
    audioSampleRate?: number;
    audioStreamIndex?: number;
    breakOnNonKeyFrames?: boolean;
    context?: shared.EncodingContextEnum;
    copyTimestamps?: boolean;
    cpuCoreLimit?: number;
    deInterlace?: boolean;
    deviceId?: string;
    deviceProfileId?: string;
    enableAutoStreamCopy?: boolean;
    enableMpegtsM2TsMode?: boolean;
    framerate?: number;
    height?: number;
    level?: string;
    liveStreamId?: string;
    maxAudioBitDepth?: number;
    maxAudioChannels?: number;
    maxFramerate?: number;
    maxRefFrames?: number;
    maxVideoBitDepth?: number;
    mediaSourceId?: string;
    minSegments?: number;
    params?: string;
    playSessionId?: string;
    profile?: string;
    requireAvc?: boolean;
    requireNonAnamorphic?: boolean;
    segmentContainer?: string;
    segmentLength?: number;
    startTimeTicks?: number;
    static?: boolean;
    streamOptions?: Map<string, string>;
    subtitleCodec?: string;
    subtitleMethod?: shared.SubtitleDeliveryMethodEnum;
    subtitleStreamIndex?: number;
    tag?: string;
    transcodeReasons?: string;
    transcodingMaxAudioChannels?: number;
    videoBitRate?: number;
    videoCodec?: string;
    videoStreamIndex?: number;
    width?: number;
}
export declare class GetHlsVideoSegmentSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetHlsVideoSegmentRequest extends SpeakeasyBase {
    pathParams: GetHlsVideoSegmentPathParams;
    queryParams: GetHlsVideoSegmentQueryParams;
    security: GetHlsVideoSegmentSecurity;
}
export declare class GetHlsVideoSegmentResponse extends SpeakeasyBase {
    contentType: string;
    getHlsVideoSegment200VideoWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
