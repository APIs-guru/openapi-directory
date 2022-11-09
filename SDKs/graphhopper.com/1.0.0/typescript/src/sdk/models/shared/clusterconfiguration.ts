import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterConfigurationClustering } from "./clusterconfigurationclustering";
import { ClusterConfigurationRouting } from "./clusterconfigurationrouting";


export class ClusterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=clustering" })
  clustering?: ClusterConfigurationClustering;

  @Metadata({ data: "json, name=response_type" })
  responseType?: string;

  @Metadata({ data: "json, name=routing" })
  routing?: ClusterConfigurationRouting;
}
