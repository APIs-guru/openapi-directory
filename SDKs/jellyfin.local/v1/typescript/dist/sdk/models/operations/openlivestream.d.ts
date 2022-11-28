import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OpenLiveStreamQueryParams extends SpeakeasyBase {
    audioStreamIndex?: number;
    enableDirectPlay?: boolean;
    enableDirectStream?: boolean;
    itemId?: string;
    maxAudioChannels?: number;
    maxStreamingBitrate?: number;
    openToken?: string;
    playSessionId?: string;
    startTimeTicks?: number;
    subtitleStreamIndex?: number;
    userId?: string;
}
export declare class OpenLiveStreamRequests extends SpeakeasyBase {
    openLiveStreamDto?: shared.OpenLiveStreamDto;
    openLiveStreamDto1?: shared.OpenLiveStreamDto;
    openLiveStreamDto2?: shared.OpenLiveStreamDto;
}
export declare class OpenLiveStreamSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class OpenLiveStreamRequest extends SpeakeasyBase {
    queryParams: OpenLiveStreamQueryParams;
    request?: OpenLiveStreamRequests;
    security: OpenLiveStreamSecurity;
}
export declare class OpenLiveStreamResponse extends SpeakeasyBase {
    contentType: string;
    liveStreamResponse?: shared.LiveStreamResponse;
    statusCode: number;
}
