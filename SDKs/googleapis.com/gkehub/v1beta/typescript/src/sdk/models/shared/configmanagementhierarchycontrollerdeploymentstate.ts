import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConfigManagementHierarchyControllerDeploymentStateExtensionEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementHierarchyControllerDeploymentStateHncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}


// ConfigManagementHierarchyControllerDeploymentState
/** 
 * Deployment state for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerDeploymentState extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: ConfigManagementHierarchyControllerDeploymentStateExtensionEnum;

  @Metadata({ data: "json, name=hnc" })
  hnc?: ConfigManagementHierarchyControllerDeploymentStateHncEnum;
}
