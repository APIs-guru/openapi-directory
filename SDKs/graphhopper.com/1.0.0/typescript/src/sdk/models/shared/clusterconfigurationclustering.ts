import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClusterConfigurationClustering extends SpeakeasyBase {
  @Metadata({ data: "json, name=max_quantity" })
  maxQuantity?: number;

  @Metadata({ data: "json, name=min_quantity" })
  minQuantity?: number;

  @Metadata({ data: "json, name=num_clusters" })
  numClusters?: number;
}
