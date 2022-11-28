import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadUniversalAudioStreamPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class HeadUniversalAudioStreamQueryParams extends SpeakeasyBase {
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
export declare class HeadUniversalAudioStreamSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class HeadUniversalAudioStreamRequest extends SpeakeasyBase {
    pathParams: HeadUniversalAudioStreamPathParams;
    queryParams: HeadUniversalAudioStreamQueryParams;
    security: HeadUniversalAudioStreamSecurity;
}
export declare class HeadUniversalAudioStreamResponse extends SpeakeasyBase {
    contentType: string;
    headUniversalAudioStream200AudioWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
