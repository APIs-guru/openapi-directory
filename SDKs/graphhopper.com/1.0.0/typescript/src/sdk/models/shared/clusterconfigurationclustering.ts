import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClusterConfigurationClustering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max_quantity" })
  maxQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=min_quantity" })
  minQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=num_clusters" })
  numClusters?: number;
}
