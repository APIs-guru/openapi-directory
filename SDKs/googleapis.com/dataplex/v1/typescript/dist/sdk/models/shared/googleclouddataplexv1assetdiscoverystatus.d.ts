import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoveryStatusStats } from "./googleclouddataplexv1assetdiscoverystatusstats";
export declare enum GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}
/**
 * Status of discovery for an asset.
**/
export declare class GoogleCloudDataplexV1AssetDiscoveryStatus extends SpeakeasyBase {
    lastRunDuration?: string;
    lastRunTime?: string;
    message?: string;
    state?: GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
    stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;
    updateTime?: string;
}
