import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigManagementInstallError } from "./configmanagementinstallerror";

export enum ConfigManagementOperatorStateDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}


// ConfigManagementOperatorState
/** 
 * State information for an ACM's Operator
**/
export class ConfigManagementOperatorState extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementOperatorStateDeploymentStateEnum;

  @Metadata({ data: "json, name=errors", elemType: shared.ConfigManagementInstallError })
  errors?: ConfigManagementInstallError[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
