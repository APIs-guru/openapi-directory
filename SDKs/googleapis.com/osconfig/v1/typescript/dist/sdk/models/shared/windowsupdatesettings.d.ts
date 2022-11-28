import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WindowsUpdateSettingsClassificationsEnum {
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
/**
 * Windows patching is performed using the Windows Update Agent.
**/
export declare class WindowsUpdateSettings extends SpeakeasyBase {
    classifications?: WindowsUpdateSettingsClassificationsEnum[];
    excludes?: string[];
    exclusivePatches?: string[];
}
