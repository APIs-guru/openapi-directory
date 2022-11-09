import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitorStreamInfo } from "./monitorstreaminfo";

export enum LiveBroadcastContentDetailsClosedCaptionsTypeEnum {
    ClosedCaptionsTypeUnspecified = "closedCaptionsTypeUnspecified"
,    ClosedCaptionsDisabled = "closedCaptionsDisabled"
,    ClosedCaptionsHttpPost = "closedCaptionsHttpPost"
,    ClosedCaptionsEmbedded = "closedCaptionsEmbedded"
}

export enum LiveBroadcastContentDetailsLatencyPreferenceEnum {
    LatencyPreferenceUnspecified = "latencyPreferenceUnspecified"
,    Normal = "normal"
,    Low = "low"
,    UltraLow = "ultraLow"
}

export enum LiveBroadcastContentDetailsProjectionEnum {
    ProjectionUnspecified = "projectionUnspecified"
,    Rectangular = "rectangular"
,    ThreeHundredAndSixty = "360"
,    Mesh = "mesh"
}

export enum LiveBroadcastContentDetailsStereoLayoutEnum {
    StereoLayoutUnspecified = "stereoLayoutUnspecified"
,    Mono = "mono"
,    LeftRight = "leftRight"
,    TopBottom = "topBottom"
}


// LiveBroadcastContentDetails
/** 
 * Detailed settings of a broadcast.
**/
export class LiveBroadcastContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundStreamId" })
  boundStreamId?: string;

  @Metadata({ data: "json, name=boundStreamLastUpdateTimeMs" })
  boundStreamLastUpdateTimeMs?: Date;

  @Metadata({ data: "json, name=closedCaptionsType" })
  closedCaptionsType?: LiveBroadcastContentDetailsClosedCaptionsTypeEnum;

  @Metadata({ data: "json, name=enableAutoStart" })
  enableAutoStart?: boolean;

  @Metadata({ data: "json, name=enableAutoStop" })
  enableAutoStop?: boolean;

  @Metadata({ data: "json, name=enableClosedCaptions" })
  enableClosedCaptions?: boolean;

  @Metadata({ data: "json, name=enableContentEncryption" })
  enableContentEncryption?: boolean;

  @Metadata({ data: "json, name=enableDvr" })
  enableDvr?: boolean;

  @Metadata({ data: "json, name=enableEmbed" })
  enableEmbed?: boolean;

  @Metadata({ data: "json, name=enableLowLatency" })
  enableLowLatency?: boolean;

  @Metadata({ data: "json, name=latencyPreference" })
  latencyPreference?: LiveBroadcastContentDetailsLatencyPreferenceEnum;

  @Metadata({ data: "json, name=mesh" })
  mesh?: string;

  @Metadata({ data: "json, name=monitorStream" })
  monitorStream?: MonitorStreamInfo;

  @Metadata({ data: "json, name=projection" })
  projection?: LiveBroadcastContentDetailsProjectionEnum;

  @Metadata({ data: "json, name=recordFromStart" })
  recordFromStart?: boolean;

  @Metadata({ data: "json, name=startWithSlate" })
  startWithSlate?: boolean;

  @Metadata({ data: "json, name=stereoLayout" })
  stereoLayout?: LiveBroadcastContentDetailsStereoLayoutEnum;
}
