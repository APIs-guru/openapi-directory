import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkConfig
/** 
 * Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAllocation" })
  ipAllocation?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;
}
