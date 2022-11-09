import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WindowsUpdateSettingsClassificationsEnum {
    ClassificationUnspecified = "CLASSIFICATION_UNSPECIFIED"
,    Critical = "CRITICAL"
,    Security = "SECURITY"
,    Definition = "DEFINITION"
,    Driver = "DRIVER"
,    FeaturePack = "FEATURE_PACK"
,    ServicePack = "SERVICE_PACK"
,    Tool = "TOOL"
,    UpdateRollup = "UPDATE_ROLLUP"
,    Update = "UPDATE"
}


// WindowsUpdateSettings
/** 
 * Windows patching is performed using the Windows Update Agent.
**/
export class WindowsUpdateSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=classifications" })
  classifications?: WindowsUpdateSettingsClassificationsEnum[];

  @Metadata({ data: "json, name=excludes" })
  excludes?: string[];

  @Metadata({ data: "json, name=exclusivePatches" })
  exclusivePatches?: string[];
}
