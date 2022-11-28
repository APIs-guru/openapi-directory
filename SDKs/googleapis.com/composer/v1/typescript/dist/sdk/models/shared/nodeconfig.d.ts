import { SpeakeasyBase } from "../../../internal/utils";
import { IpAllocationPolicy } from "./ipallocationpolicy";
/**
 * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
**/
export declare class NodeConfig extends SpeakeasyBase {
    diskSizeGb?: number;
    enableIpMasqAgent?: boolean;
    ipAllocationPolicy?: IpAllocationPolicy;
    location?: string;
    machineType?: string;
    network?: string;
    oauthScopes?: string[];
    serviceAccount?: string;
    subnetwork?: string;
    tags?: string[];
}
