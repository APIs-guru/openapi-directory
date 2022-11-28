import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostedPlaybackInfoPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetPostedPlaybackInfoQueryParams extends SpeakeasyBase {
    allowAudioStreamCopy?: boolean;
    allowVideoStreamCopy?: boolean;
    audioStreamIndex?: number;
    autoOpenLiveStream?: boolean;
    enableDirectPlay?: boolean;
    enableDirectStream?: boolean;
    enableTranscoding?: boolean;
    liveStreamId?: string;
    maxAudioChannels?: number;
    maxStreamingBitrate?: number;
    mediaSourceId?: string;
    startTimeTicks?: number;
    subtitleStreamIndex?: number;
    userId?: string;
}
export declare class GetPostedPlaybackInfoRequests extends SpeakeasyBase {
    playbackInfoDto?: shared.PlaybackInfoDto;
    playbackInfoDto1?: shared.PlaybackInfoDto;
    playbackInfoDto2?: shared.PlaybackInfoDto;
}
export declare class GetPostedPlaybackInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPostedPlaybackInfoRequest extends SpeakeasyBase {
    pathParams: GetPostedPlaybackInfoPathParams;
    queryParams: GetPostedPlaybackInfoQueryParams;
    request?: GetPostedPlaybackInfoRequests;
    security: GetPostedPlaybackInfoSecurity;
}
export declare class GetPostedPlaybackInfoResponse extends SpeakeasyBase {
    contentType: string;
    playbackInfoResponse?: shared.PlaybackInfoResponse;
    statusCode: number;
}
