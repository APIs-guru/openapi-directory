import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorStreamInfo } from "./monitorstreaminfo";
export declare enum LiveBroadcastContentDetailsClosedCaptionsTypeEnum {
    ClosedCaptionsTypeUnspecified = "closedCaptionsTypeUnspecified",
    ClosedCaptionsDisabled = "closedCaptionsDisabled",
    ClosedCaptionsHttpPost = "closedCaptionsHttpPost",
    ClosedCaptionsEmbedded = "closedCaptionsEmbedded"
}
export declare enum LiveBroadcastContentDetailsLatencyPreferenceEnum {
    LatencyPreferenceUnspecified = "latencyPreferenceUnspecified",
    Normal = "normal",
    Low = "low",
    UltraLow = "ultraLow"
}
export declare enum LiveBroadcastContentDetailsProjectionEnum {
    ProjectionUnspecified = "projectionUnspecified",
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360",
    Mesh = "mesh"
}
export declare enum LiveBroadcastContentDetailsStereoLayoutEnum {
    StereoLayoutUnspecified = "stereoLayoutUnspecified",
    Mono = "mono",
    LeftRight = "leftRight",
    TopBottom = "topBottom"
}
/**
 * Detailed settings of a broadcast.
**/
export declare class LiveBroadcastContentDetails extends SpeakeasyBase {
    boundStreamId?: string;
    boundStreamLastUpdateTimeMs?: Date;
    closedCaptionsType?: LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
    enableAutoStart?: boolean;
    enableAutoStop?: boolean;
    enableClosedCaptions?: boolean;
    enableContentEncryption?: boolean;
    enableDvr?: boolean;
    enableEmbed?: boolean;
    enableLowLatency?: boolean;
    latencyPreference?: LiveBroadcastContentDetailsLatencyPreferenceEnum;
    mesh?: string;
    monitorStream?: MonitorStreamInfo;
    projection?: LiveBroadcastContentDetailsProjectionEnum;
    recordFromStart?: boolean;
    startWithSlate?: boolean;
    stereoLayout?: LiveBroadcastContentDetailsStereoLayoutEnum;
}
