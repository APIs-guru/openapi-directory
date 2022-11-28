import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkPerformanceConfig } from "./networkperformanceconfig";



// NodeNetworkConfig
/** 
 * Parameters for node pool-level network config.
**/
export class NodeNetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createPodRange" })
  createPodRange?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePrivateNodes" })
  enablePrivateNodes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networkPerformanceConfig" })
  networkPerformanceConfig?: NetworkPerformanceConfig;

  @SpeakeasyMetadata({ data: "json, name=podIpv4CidrBlock" })
  podIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=podRange" })
  podRange?: string;
}
