import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WindowsUpdateSettingsClassificationsEnum {
    ClassificationUnspecified = "CLASSIFICATION_UNSPECIFIED",
    Critical = "CRITICAL",
    Security = "SECURITY",
    Definition = "DEFINITION",
    Driver = "DRIVER",
    FeaturePack = "FEATURE_PACK",
    ServicePack = "SERVICE_PACK",
    Tool = "TOOL",
    UpdateRollup = "UPDATE_ROLLUP",
    Update = "UPDATE"
}


// WindowsUpdateSettings
/** 
 * Windows patching is performed using the Windows Update Agent.
**/
export class WindowsUpdateSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classifications" })
  classifications?: WindowsUpdateSettingsClassificationsEnum[];

  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclusivePatches" })
  exclusivePatches?: string[];
}
