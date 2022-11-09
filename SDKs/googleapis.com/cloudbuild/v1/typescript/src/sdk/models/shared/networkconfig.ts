import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkConfigEgressOptionEnum {
    EgressOptionUnspecified = "EGRESS_OPTION_UNSPECIFIED"
,    NoPublicEgress = "NO_PUBLIC_EGRESS"
,    PublicEgress = "PUBLIC_EGRESS"
}


// NetworkConfig
/** 
 * Defines the network configuration for the pool.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=egressOption" })
  egressOption?: NetworkConfigEgressOptionEnum;

  @Metadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;
}
