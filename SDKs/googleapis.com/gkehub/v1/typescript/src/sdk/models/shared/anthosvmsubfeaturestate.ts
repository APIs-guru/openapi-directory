import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AnthosVmSubFeatureStateInstallationStateEnum {
    InstallationStateUnspecified = "INSTALLATION_STATE_UNSPECIFIED"
,    InstallationStateNotInstalled = "INSTALLATION_STATE_NOT_INSTALLED"
,    InstallationStateInstalled = "INSTALLATION_STATE_INSTALLED"
,    InstallationStateFailed = "INSTALLATION_STATE_FAILED"
}


// AnthosVmSubFeatureState
/** 
 * AnthosVMSubFeatureState contains the state of the AnthosVM subfeatures.
**/
export class AnthosVmSubFeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=installationState" })
  installationState?: AnthosVmSubFeatureStateInstallationStateEnum;

  @Metadata({ data: "json, name=migrateState" })
  migrateState?: Map<string, any>;

  @Metadata({ data: "json, name=serviceMeshState" })
  serviceMeshState?: Map<string, any>;
}
