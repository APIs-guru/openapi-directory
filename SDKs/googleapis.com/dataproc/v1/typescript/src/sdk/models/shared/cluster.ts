import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterConfig } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { ClusterStatus } from "./clusterstatus";
import { ClusterStatus } from "./clusterstatus";
import { VirtualClusterConfig } from "./virtualclusterconfig";


// Cluster
/** 
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=config" })
  config?: ClusterConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=metrics" })
  metrics?: ClusterMetrics;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=status" })
  status?: ClusterStatus;

  @Metadata({ data: "json, name=statusHistory", elemType: shared.ClusterStatus })
  statusHistory?: ClusterStatus[];

  @Metadata({ data: "json, name=virtualClusterConfig" })
  virtualClusterConfig?: VirtualClusterConfig;
}
