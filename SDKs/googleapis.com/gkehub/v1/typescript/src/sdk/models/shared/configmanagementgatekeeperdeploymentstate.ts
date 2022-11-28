import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}


// ConfigManagementGatekeeperDeploymentState
/** 
 * State of Policy Controller installation.
**/
export class ConfigManagementGatekeeperDeploymentState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatekeeperAudit" })
  gatekeeperAudit?: ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum;

  @SpeakeasyMetadata({ data: "json, name=gatekeeperControllerManagerState" })
  gatekeeperControllerManagerState?: ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=gatekeeperMutation" })
  gatekeeperMutation?: ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum;
}
