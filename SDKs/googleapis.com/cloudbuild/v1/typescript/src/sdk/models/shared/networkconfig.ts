import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkConfigEgressOptionEnum {
    EgressOptionUnspecified = "EGRESS_OPTION_UNSPECIFIED",
    NoPublicEgress = "NO_PUBLIC_EGRESS",
    PublicEgress = "PUBLIC_EGRESS"
}


// NetworkConfig
/** 
 * Defines the network configuration for the pool.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=egressOption" })
  egressOption?: NetworkConfigEgressOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;
}
