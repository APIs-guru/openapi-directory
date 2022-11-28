import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementInstallError } from "./configmanagementinstallerror";


export enum ConfigManagementOperatorStateDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}


// ConfigManagementOperatorState
/** 
 * State information for an ACM's Operator
**/
export class ConfigManagementOperatorState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementOperatorStateDeploymentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ConfigManagementInstallError })
  errors?: ConfigManagementInstallError[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
