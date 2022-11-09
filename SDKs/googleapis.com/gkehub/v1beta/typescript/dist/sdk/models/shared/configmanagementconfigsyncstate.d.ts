import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementConfigSyncDeploymentState } from "./configmanagementconfigsyncdeploymentstate";
import { ConfigManagementSyncState } from "./configmanagementsyncstate";
import { ConfigManagementConfigSyncVersion } from "./configmanagementconfigsyncversion";
/**
 * State information for ConfigSync
**/
export declare class ConfigManagementConfigSyncState extends SpeakeasyBase {
    deploymentState?: ConfigManagementConfigSyncDeploymentState;
    syncState?: ConfigManagementSyncState;
    version?: ConfigManagementConfigSyncVersion;
}
