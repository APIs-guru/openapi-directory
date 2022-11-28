import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { ConfidentialNodes } from "./confidentialnodes";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { ReservationAffinity } from "./reservationaffinity";
import { SandboxConfig } from "./sandboxconfig";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { NodeTaint } from "./nodetaint";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
/**
 * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
**/
export declare class NodeConfig extends SpeakeasyBase {
    accelerators?: AcceleratorConfig[];
    advancedMachineFeatures?: AdvancedMachineFeatures;
    bootDiskKmsKey?: string;
    confidentialNodes?: ConfidentialNodes;
    diskSizeGb?: number;
    diskType?: string;
    fastSocket?: FastSocket;
    gcfsConfig?: GcfsConfig;
    gvnic?: VirtualNic;
    imageType?: string;
    kubeletConfig?: NodeKubeletConfig;
    labels?: Map<string, string>;
    linuxNodeConfig?: LinuxNodeConfig;
    localSsdCount?: number;
    loggingConfig?: NodePoolLoggingConfig;
    machineType?: string;
    metadata?: Map<string, string>;
    minCpuPlatform?: string;
    nodeGroup?: string;
    oauthScopes?: string[];
    preemptible?: boolean;
    reservationAffinity?: ReservationAffinity;
    resourceLabels?: Map<string, string>;
    sandboxConfig?: SandboxConfig;
    serviceAccount?: string;
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    spot?: boolean;
    tags?: string[];
    taints?: NodeTaint[];
    workloadMetadataConfig?: WorkloadMetadataConfig;
}
