import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LocalControllerStateInstallationStateEnum {
    InstallationStateUnspecified = "INSTALLATION_STATE_UNSPECIFIED",
    InstallationStateNotInstalled = "INSTALLATION_STATE_NOT_INSTALLED",
    InstallationStateInstalled = "INSTALLATION_STATE_INSTALLED",
    InstallationStateFailed = "INSTALLATION_STATE_FAILED"
}
/**
 * LocalControllerState contains the state of the local controller deployed in the cluster.
**/
export declare class LocalControllerState extends SpeakeasyBase {
    description?: string;
    installationState?: LocalControllerStateInstallationStateEnum;
}
