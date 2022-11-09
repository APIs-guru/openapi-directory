import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfidentialNodes } from "./confidentialnodes";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { NodeLabels } from "./nodelabels";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { NetworkTags } from "./networktags";
import { NodeTaints } from "./nodetaints";
import { UpgradeSettings } from "./upgradesettings";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";


// UpdateNodePoolRequest
/** 
 * UpdateNodePoolRequests update a node pool's image and/or version.
**/
export class UpdateNodePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @Metadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @Metadata({ data: "json, name=gvnic" })
  gvnic?: VirtualNic;

  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=kubeletConfig" })
  kubeletConfig?: NodeKubeletConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: NodeLabels;

  @Metadata({ data: "json, name=linuxNodeConfig" })
  linuxNodeConfig?: LinuxNodeConfig;

  @Metadata({ data: "json, name=locations" })
  locations?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeNetworkConfig" })
  nodeNetworkConfig?: NodeNetworkConfig;

  @Metadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @Metadata({ data: "json, name=nodeVersion" })
  nodeVersion?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: NetworkTags;

  @Metadata({ data: "json, name=taints" })
  taints?: NodeTaints;

  @Metadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;

  @Metadata({ data: "json, name=workloadMetadataConfig" })
  workloadMetadataConfig?: WorkloadMetadataConfig;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
