import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementBinauthzVersion } from "./configmanagementbinauthzversion";

export enum ConfigManagementBinauthzStateWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}


// ConfigManagementBinauthzState
/** 
 * State for Binauthz
**/
export class ConfigManagementBinauthzState extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: ConfigManagementBinauthzVersion;

  @Metadata({ data: "json, name=webhook" })
  webhook?: ConfigManagementBinauthzStateWebhookEnum;
}
