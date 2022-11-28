import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicCluster } from "./dynamiccluster";
import { StaticCluster } from "./staticcluster";
/**
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
**/
export declare class ClustersConfigDump extends SpeakeasyBase {
    dynamicActiveClusters?: DynamicCluster[];
    dynamicWarmingClusters?: DynamicCluster[];
    staticClusters?: StaticCluster[];
    versionInfo?: string;
}
