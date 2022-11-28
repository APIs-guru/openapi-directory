import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementBinauthzVersion } from "./configmanagementbinauthzversion";


export enum ConfigManagementBinauthzStateWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}


// ConfigManagementBinauthzState
/** 
 * State for Binauthz
**/
export class ConfigManagementBinauthzState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: ConfigManagementBinauthzVersion;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: ConfigManagementBinauthzStateWebhookEnum;
}
