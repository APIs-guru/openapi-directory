import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicCluster } from "./dynamiccluster";
import { DynamicCluster } from "./dynamiccluster";
import { StaticCluster } from "./staticcluster";


// ClustersConfigDump
/** 
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
**/
export class ClustersConfigDump extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicActiveClusters", elemType: shared.DynamicCluster })
  dynamicActiveClusters?: DynamicCluster[];

  @Metadata({ data: "json, name=dynamicWarmingClusters", elemType: shared.DynamicCluster })
  dynamicWarmingClusters?: DynamicCluster[];

  @Metadata({ data: "json, name=staticClusters", elemType: shared.StaticCluster })
  staticClusters?: StaticCluster[];

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
