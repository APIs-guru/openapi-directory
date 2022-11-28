import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigManagementHierarchyControllerDeploymentStateExtensionEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementHierarchyControllerDeploymentStateHncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}


// ConfigManagementHierarchyControllerDeploymentState
/** 
 * Deployment state for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerDeploymentState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: ConfigManagementHierarchyControllerDeploymentStateExtensionEnum;

  @SpeakeasyMetadata({ data: "json, name=hnc" })
  hnc?: ConfigManagementHierarchyControllerDeploymentStateHncEnum;
}
