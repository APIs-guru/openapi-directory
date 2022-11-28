import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigInput } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { VirtualClusterConfig } from "./virtualclusterconfig";
import { ClusterConfig } from "./clusterconfig";
import { ClusterStatus } from "./clusterstatus";



// ClusterInput
/** 
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export class ClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ClusterConfigInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: ClusterMetrics;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualClusterConfig" })
  virtualClusterConfig?: VirtualClusterConfig;
}


// Cluster
/** 
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: ClusterMetrics;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClusterStatus;

  @SpeakeasyMetadata({ data: "json, name=statusHistory", elemType: ClusterStatus })
  statusHistory?: ClusterStatus[];

  @SpeakeasyMetadata({ data: "json, name=virtualClusterConfig" })
  virtualClusterConfig?: VirtualClusterConfig;
}
