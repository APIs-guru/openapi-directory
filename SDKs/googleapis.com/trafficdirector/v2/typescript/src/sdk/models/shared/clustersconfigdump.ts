import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicCluster } from "./dynamiccluster";
import { StaticCluster } from "./staticcluster";



// ClustersConfigDump
/** 
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
**/
export class ClustersConfigDump extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicActiveClusters", elemType: DynamicCluster })
  dynamicActiveClusters?: DynamicCluster[];

  @SpeakeasyMetadata({ data: "json, name=dynamicWarmingClusters", elemType: DynamicCluster })
  dynamicWarmingClusters?: DynamicCluster[];

  @SpeakeasyMetadata({ data: "json, name=staticClusters", elemType: StaticCluster })
  staticClusters?: StaticCluster[];

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
