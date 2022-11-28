import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementConfigSyncDeploymentState } from "./configmanagementconfigsyncdeploymentstate";
import { ConfigManagementSyncState } from "./configmanagementsyncstate";
import { ConfigManagementConfigSyncVersion } from "./configmanagementconfigsyncversion";



// ConfigManagementConfigSyncState
/** 
 * State information for ConfigSync
**/
export class ConfigManagementConfigSyncState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementConfigSyncDeploymentState;

  @SpeakeasyMetadata({ data: "json, name=syncState" })
  syncState?: ConfigManagementSyncState;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: ConfigManagementConfigSyncVersion;
}
