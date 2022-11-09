import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkPerformanceConfig } from "./networkperformanceconfig";


// NodeNetworkConfig
/** 
 * Parameters for node pool-level network config.
**/
export class NodeNetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=createPodRange" })
  createPodRange?: boolean;

  @Metadata({ data: "json, name=networkPerformanceConfig" })
  networkPerformanceConfig?: NetworkPerformanceConfig;

  @Metadata({ data: "json, name=podIpv4CidrBlock" })
  podIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=podRange" })
  podRange?: string;
}
