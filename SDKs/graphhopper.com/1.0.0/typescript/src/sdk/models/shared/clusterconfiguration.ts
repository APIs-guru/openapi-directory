import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigurationClustering } from "./clusterconfigurationclustering";
import { ClusterConfigurationRouting } from "./clusterconfigurationrouting";



export class ClusterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clustering" })
  clustering?: ClusterConfigurationClustering;

  @SpeakeasyMetadata({ data: "json, name=response_type" })
  responseType?: string;

  @SpeakeasyMetadata({ data: "json, name=routing" })
  routing?: ClusterConfigurationRouting;
}
