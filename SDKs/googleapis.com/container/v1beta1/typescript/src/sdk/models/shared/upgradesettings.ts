import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueGreenSettings } from "./bluegreensettings";


export enum UpgradeSettingsStrategyEnum {
    NodePoolUpdateStrategyUnspecified = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED",
    BlueGreen = "BLUE_GREEN",
    Surge = "SURGE"
}


// UpgradeSettings
/** 
 * These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
**/
export class UpgradeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueGreenSettings" })
  blueGreenSettings?: BlueGreenSettings;

  @SpeakeasyMetadata({ data: "json, name=maxSurge" })
  maxSurge?: number;

  @SpeakeasyMetadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy?: UpgradeSettingsStrategyEnum;
}
