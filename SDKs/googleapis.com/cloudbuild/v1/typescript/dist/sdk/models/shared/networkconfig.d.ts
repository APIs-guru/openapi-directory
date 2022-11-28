import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkConfigEgressOptionEnum {
    EgressOptionUnspecified = "EGRESS_OPTION_UNSPECIFIED",
    NoPublicEgress = "NO_PUBLIC_EGRESS",
    PublicEgress = "PUBLIC_EGRESS"
}
/**
 * Defines the network configuration for the pool.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    egressOption?: NetworkConfigEgressOptionEnum;
    peeredNetwork?: string;
}
