import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveHlsStreamPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetLiveHlsStreamQueryParams extends SpeakeasyBase {
    allowAudioStreamCopy?: boolean;
    allowVideoStreamCopy?: boolean;
    audioBitRate?: number;
    audioChannels?: number;
    audioCodec?: string;
    audioSampleRate?: number;
    audioStreamIndex?: number;
    breakOnNonKeyFrames?: boolean;
    container?: string;
    context?: shared.EncodingContextEnum;
    copyTimestamps?: boolean;
    cpuCoreLimit?: number;
    deInterlace?: boolean;
    deviceId?: string;
    deviceProfileId?: string;
    enableAutoStreamCopy?: boolean;
    enableMpegtsM2TsMode?: boolean;
    enableSubtitlesInManifest?: boolean;
    framerate?: number;
    height?: number;
    level?: string;
    liveStreamId?: string;
    maxAudioBitDepth?: number;
    maxAudioChannels?: number;
    maxFramerate?: number;
    maxHeight?: number;
    maxRefFrames?: number;
    maxVideoBitDepth?: number;
    maxWidth?: number;
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
export declare class GetLiveHlsStreamSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLiveHlsStreamRequest extends SpeakeasyBase {
    pathParams: GetLiveHlsStreamPathParams;
    queryParams: GetLiveHlsStreamQueryParams;
    security: GetLiveHlsStreamSecurity;
}
export declare class GetLiveHlsStreamResponse extends SpeakeasyBase {
    contentType: string;
    getLiveHlsStream200ApplicationXMpegurlBinaryString?: Uint8Array;
    statusCode: number;
}
