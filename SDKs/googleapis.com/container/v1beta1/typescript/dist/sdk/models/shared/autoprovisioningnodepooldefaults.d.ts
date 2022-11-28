import { SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeSettings } from "./upgradesettings";
/**
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
**/
export declare class AutoprovisioningNodePoolDefaults extends SpeakeasyBase {
    bootDiskKmsKey?: string;
    diskSizeGb?: number;
    diskType?: string;
    imageType?: string;
    management?: NodeManagement;
    minCpuPlatform?: string;
    oauthScopes?: string[];
    serviceAccount?: string;
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    upgradeSettings?: UpgradeSettings;
}
