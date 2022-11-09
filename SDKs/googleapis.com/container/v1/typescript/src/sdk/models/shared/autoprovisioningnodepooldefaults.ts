import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeManagement } from "./nodemanagement";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeSettings } from "./upgradesettings";


// AutoprovisioningNodePoolDefaults
/** 
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
**/
export class AutoprovisioningNodePoolDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=management" })
  management?: NodeManagement;

  @Metadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @Metadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @Metadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;
}
