import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1AssetDiscoveryStatusStats } from "./googleclouddataplexv1assetdiscoverystatusstats";

export enum GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Scheduled = "SCHEDULED"
,    InProgress = "IN_PROGRESS"
,    Paused = "PAUSED"
,    Disabled = "DISABLED"
}


// GoogleCloudDataplexV1AssetDiscoveryStatus
/** 
 * Status of discovery for an asset.
**/
export class GoogleCloudDataplexV1AssetDiscoveryStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastRunDuration" })
  lastRunDuration?: string;

  @Metadata({ data: "json, name=lastRunTime" })
  lastRunTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;

  @Metadata({ data: "json, name=stats" })
  stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
