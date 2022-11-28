import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadMasterHlsAudioPlaylistPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class HeadMasterHlsAudioPlaylistQueryParams extends SpeakeasyBase {
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
    enableAdaptiveBitrateStreaming?: boolean;
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
    maxStreamingBitrate?: number;
    maxVideoBitDepth?: number;
    mediaSourceId: string;
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
export declare class HeadMasterHlsAudioPlaylistSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class HeadMasterHlsAudioPlaylistRequest extends SpeakeasyBase {
    pathParams: HeadMasterHlsAudioPlaylistPathParams;
    queryParams: HeadMasterHlsAudioPlaylistQueryParams;
    security: HeadMasterHlsAudioPlaylistSecurity;
}
export declare class HeadMasterHlsAudioPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    headMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString?: Uint8Array;
    statusCode: number;
}
