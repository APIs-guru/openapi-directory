import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUniversalAudioStreamPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetUniversalAudioStreamQueryParams extends SpeakeasyBase {
    audioBitRate?: number;
    audioCodec?: string;
    breakOnNonKeyFrames?: boolean;
    container?: string[];
    deviceId?: string;
    enableRedirection?: boolean;
    enableRemoteMedia?: boolean;
    maxAudioBitDepth?: number;
    maxAudioChannels?: number;
    maxAudioSampleRate?: number;
    maxStreamingBitrate?: number;
    mediaSourceId?: string;
    startTimeTicks?: number;
    transcodingAudioChannels?: number;
    transcodingContainer?: string;
    transcodingProtocol?: string;
    userId?: string;
}
export declare class GetUniversalAudioStreamSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetUniversalAudioStreamRequest extends SpeakeasyBase {
    pathParams: GetUniversalAudioStreamPathParams;
    queryParams: GetUniversalAudioStreamQueryParams;
    security: GetUniversalAudioStreamSecurity;
}
export declare class GetUniversalAudioStreamResponse extends SpeakeasyBase {
    contentType: string;
    getUniversalAudioStream200AudioWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
