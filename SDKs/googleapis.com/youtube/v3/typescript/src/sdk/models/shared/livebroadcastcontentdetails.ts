import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitorStreamInfo } from "./monitorstreaminfo";


export enum LiveBroadcastContentDetailsClosedCaptionsTypeEnum {
    ClosedCaptionsTypeUnspecified = "closedCaptionsTypeUnspecified",
    ClosedCaptionsDisabled = "closedCaptionsDisabled",
    ClosedCaptionsHttpPost = "closedCaptionsHttpPost",
    ClosedCaptionsEmbedded = "closedCaptionsEmbedded"
}

export enum LiveBroadcastContentDetailsLatencyPreferenceEnum {
    LatencyPreferenceUnspecified = "latencyPreferenceUnspecified",
    Normal = "normal",
    Low = "low",
    UltraLow = "ultraLow"
}

export enum LiveBroadcastContentDetailsProjectionEnum {
    ProjectionUnspecified = "projectionUnspecified",
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360",
    Mesh = "mesh"
}

export enum LiveBroadcastContentDetailsStereoLayoutEnum {
    StereoLayoutUnspecified = "stereoLayoutUnspecified",
    Mono = "mono",
    LeftRight = "leftRight",
    TopBottom = "topBottom"
}


// LiveBroadcastContentDetails
/** 
 * Detailed settings of a broadcast.
**/
export class LiveBroadcastContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundStreamId" })
  boundStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=boundStreamLastUpdateTimeMs" })
  boundStreamLastUpdateTimeMs?: Date;

  @SpeakeasyMetadata({ data: "json, name=closedCaptionsType" })
  closedCaptionsType?: LiveBroadcastContentDetailsClosedCaptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enableAutoStart" })
  enableAutoStart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableAutoStop" })
  enableAutoStop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableClosedCaptions" })
  enableClosedCaptions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableContentEncryption" })
  enableContentEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableDvr" })
  enableDvr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableEmbed" })
  enableEmbed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableLowLatency" })
  enableLowLatency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latencyPreference" })
  latencyPreference?: LiveBroadcastContentDetailsLatencyPreferenceEnum;

  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: string;

  @SpeakeasyMetadata({ data: "json, name=monitorStream" })
  monitorStream?: MonitorStreamInfo;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: LiveBroadcastContentDetailsProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=recordFromStart" })
  recordFromStart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startWithSlate" })
  startWithSlate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stereoLayout" })
  stereoLayout?: LiveBroadcastContentDetailsStereoLayoutEnum;
}
