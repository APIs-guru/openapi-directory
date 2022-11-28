import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// UpdateNodePoolRequest
/** 
 * SetNodePoolVersionRequest updates the version of a node pool.
**/
export class UpdateNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @SpeakeasyMetadata({ data: "json, name=fastSocket" })
  fastSocket?: FastSocket;

  @SpeakeasyMetadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @SpeakeasyMetadata({ data: "json, name=gvnic" })
  gvnic?: VirtualNic;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=kubeletConfig" })
  kubeletConfig?: NodeKubeletConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: NodeLabels;

  @SpeakeasyMetadata({ data: "json, name=linuxNodeConfig" })
  linuxNodeConfig?: LinuxNodeConfig;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeNetworkConfig" })
  nodeNetworkConfig?: NodeNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeVersion" })
  nodeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceLabels" })
  resourceLabels?: ResourceLabels;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: NetworkTags;

  @SpeakeasyMetadata({ data: "json, name=taints" })
  taints?: NodeTaints;

  @SpeakeasyMetadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;

  @SpeakeasyMetadata({ data: "json, name=workloadMetadataConfig" })
  workloadMetadataConfig?: WorkloadMetadataConfig;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
