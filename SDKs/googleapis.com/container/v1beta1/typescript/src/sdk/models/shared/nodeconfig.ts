import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { ConfidentialNodes } from "./confidentialnodes";
import { EphemeralStorageConfig } from "./ephemeralstorageconfig";
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


// NodeConfig
/** 
 * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
**/
export class NodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerators", elemType: shared.AcceleratorConfig })
  accelerators?: AcceleratorConfig[];

  @Metadata({ data: "json, name=advancedMachineFeatures" })
  advancedMachineFeatures?: AdvancedMachineFeatures;

  @Metadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @Metadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=ephemeralStorageConfig" })
  ephemeralStorageConfig?: EphemeralStorageConfig;

  @Metadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @Metadata({ data: "json, name=gvnic" })
  gvnic?: VirtualNic;

  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=kubeletConfig" })
  kubeletConfig?: NodeKubeletConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=linuxNodeConfig" })
  linuxNodeConfig?: LinuxNodeConfig;

  @Metadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @Metadata({ data: "json, name=nodeGroup" })
  nodeGroup?: string;

  @Metadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @Metadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @Metadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @Metadata({ data: "json, name=sandboxConfig" })
  sandboxConfig?: SandboxConfig;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @Metadata({ data: "json, name=spot" })
  spot?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=taints", elemType: shared.NodeTaint })
  taints?: NodeTaint[];

  @Metadata({ data: "json, name=workloadMetadataConfig" })
  workloadMetadataConfig?: WorkloadMetadataConfig;
}
