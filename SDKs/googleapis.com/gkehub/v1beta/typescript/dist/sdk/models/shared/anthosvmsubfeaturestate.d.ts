import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AnthosVmSubFeatureStateInstallationStateEnum {
    InstallationStateUnspecified = "INSTALLATION_STATE_UNSPECIFIED",
    InstallationStateNotInstalled = "INSTALLATION_STATE_NOT_INSTALLED",
    InstallationStateInstalled = "INSTALLATION_STATE_INSTALLED",
    InstallationStateFailed = "INSTALLATION_STATE_FAILED"
}
/**
 * AnthosVMSubFeatureState contains the state of the AnthosVM subfeatures.
**/
export declare class AnthosVmSubFeatureState extends SpeakeasyBase {
    description?: string;
    installationState?: AnthosVmSubFeatureStateInstallationStateEnum;
    migrateState?: Map<string, any>;
    serviceMeshState?: Map<string, any>;
}
