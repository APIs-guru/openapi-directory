import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings } from "./googleclouddialogflowcxv3beta1securitysettingsaudioexportsettings";
import { GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings } from "./googleclouddialogflowcxv3beta1securitysettingsinsightsexportsettings";
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum {
    PurgeDataTypeUnspecified = "PURGE_DATA_TYPE_UNSPECIFIED",
    DialogflowHistory = "DIALOGFLOW_HISTORY"
}
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum {
    RedactionScopeUnspecified = "REDACTION_SCOPE_UNSPECIFIED",
    RedactDiskStorage = "REDACT_DISK_STORAGE"
}
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum {
    RedactionStrategyUnspecified = "REDACTION_STRATEGY_UNSPECIFIED",
    RedactWithService = "REDACT_WITH_SERVICE"
}
/**
 * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
**/
export declare class GoogleCloudDialogflowCxV3beta1SecuritySettings extends SpeakeasyBase {
    audioExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
    deidentifyTemplate?: string;
    displayName?: string;
    insightsExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
    inspectTemplate?: string;
    name?: string;
    purgeDataTypes?: GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum[];
    redactionScope?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum;
    redactionStrategy?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum;
    retentionWindowDays?: number;
}
