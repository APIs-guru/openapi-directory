import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigurationClustering } from "./clusterconfigurationclustering";
import { ClusterConfigurationRouting } from "./clusterconfigurationrouting";
export declare class ClusterConfiguration extends SpeakeasyBase {
    clustering?: ClusterConfigurationClustering;
    responseType?: string;
    routing?: ClusterConfigurationRouting;
}
