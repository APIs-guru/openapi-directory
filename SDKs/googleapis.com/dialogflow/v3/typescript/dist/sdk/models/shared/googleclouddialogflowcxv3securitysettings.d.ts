import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings } from "./googleclouddialogflowcxv3securitysettingsaudioexportsettings";
import { GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings } from "./googleclouddialogflowcxv3securitysettingsinsightsexportsettings";
export declare enum GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum {
    PurgeDataTypeUnspecified = "PURGE_DATA_TYPE_UNSPECIFIED",
    DialogflowHistory = "DIALOGFLOW_HISTORY"
}
export declare enum GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum {
    RedactionScopeUnspecified = "REDACTION_SCOPE_UNSPECIFIED",
    RedactDiskStorage = "REDACT_DISK_STORAGE"
}
export declare enum GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum {
    RedactionStrategyUnspecified = "REDACTION_STRATEGY_UNSPECIFIED",
    RedactWithService = "REDACT_WITH_SERVICE"
}
/**
 * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
**/
export declare class GoogleCloudDialogflowCxV3SecuritySettings extends SpeakeasyBase {
    audioExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings;
    deidentifyTemplate?: string;
    displayName?: string;
    insightsExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings;
    inspectTemplate?: string;
    name?: string;
    purgeDataTypes?: GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum[];
    redactionScope?: GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum;
    redactionStrategy?: GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum;
    retentionWindowDays?: number;
}
