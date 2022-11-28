import { SpeakeasyBase } from "../../../internal/utils";
import { ConfidentialNodes } from "./confidentialnodes";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { NodeLabels } from "./nodelabels";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { ResourceLabels } from "./resourcelabels";
import { NetworkTags } from "./networktags";
import { NodeTaints } from "./nodetaints";
import { UpgradeSettings } from "./upgradesettings";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
/**
 * SetNodePoolVersionRequest updates the version of a node pool.
**/
export declare class UpdateNodePoolRequest extends SpeakeasyBase {
    clusterId?: string;
    confidentialNodes?: ConfidentialNodes;
    fastSocket?: FastSocket;
    gcfsConfig?: GcfsConfig;
    gvnic?: VirtualNic;
    imageType?: string;
    kubeletConfig?: NodeKubeletConfig;
    labels?: NodeLabels;
    linuxNodeConfig?: LinuxNodeConfig;
    locations?: string[];
    loggingConfig?: NodePoolLoggingConfig;
    name?: string;
    nodeNetworkConfig?: NodeNetworkConfig;
    nodePoolId?: string;
    nodeVersion?: string;
    projectId?: string;
    resourceLabels?: ResourceLabels;
    tags?: NetworkTags;
    taints?: NodeTaints;
    upgradeSettings?: UpgradeSettings;
    workloadMetadataConfig?: WorkloadMetadataConfig;
    zone?: string;
}
