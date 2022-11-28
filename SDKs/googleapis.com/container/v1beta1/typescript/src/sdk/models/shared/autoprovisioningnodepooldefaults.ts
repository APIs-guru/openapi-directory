import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeSettings } from "./upgradesettings";



// AutoprovisioningNodePoolDefaults
/** 
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
**/
export class AutoprovisioningNodePoolDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=management" })
  management?: NodeManagement;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;
}
