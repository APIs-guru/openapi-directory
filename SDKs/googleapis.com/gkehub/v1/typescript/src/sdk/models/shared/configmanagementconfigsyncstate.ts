import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementConfigSyncDeploymentState } from "./configmanagementconfigsyncdeploymentstate";
import { ConfigManagementSyncState } from "./configmanagementsyncstate";
import { ConfigManagementConfigSyncVersion } from "./configmanagementconfigsyncversion";


// ConfigManagementConfigSyncState
/** 
 * State information for ConfigSync
**/
export class ConfigManagementConfigSyncState extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementConfigSyncDeploymentState;

  @Metadata({ data: "json, name=syncState" })
  syncState?: ConfigManagementSyncState;

  @Metadata({ data: "json, name=version" })
  version?: ConfigManagementConfigSyncVersion;
}
