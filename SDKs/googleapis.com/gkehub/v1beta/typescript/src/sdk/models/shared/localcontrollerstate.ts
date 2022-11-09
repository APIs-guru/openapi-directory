import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocalControllerStateInstallationStateEnum {
    InstallationStateUnspecified = "INSTALLATION_STATE_UNSPECIFIED"
,    InstallationStateNotInstalled = "INSTALLATION_STATE_NOT_INSTALLED"
,    InstallationStateInstalled = "INSTALLATION_STATE_INSTALLED"
,    InstallationStateFailed = "INSTALLATION_STATE_FAILED"
}


// LocalControllerState
/** 
 * LocalControllerState contains the state of the local controller deployed in the cluster.
**/
export class LocalControllerState extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=installationState" })
  installationState?: LocalControllerStateInstallationStateEnum;
}
