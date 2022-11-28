import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoveryStatusStats } from "./googleclouddataplexv1assetdiscoverystatusstats";


export enum GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}


// GoogleCloudDataplexV1AssetDiscoveryStatus
/** 
 * Status of discovery for an asset.
**/
export class GoogleCloudDataplexV1AssetDiscoveryStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastRunDuration" })
  lastRunDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRunTime" })
  lastRunTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
