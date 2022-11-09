import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings } from "./googleclouddialogflowcxv3securitysettingsaudioexportsettings";
import { GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings } from "./googleclouddialogflowcxv3securitysettingsinsightsexportsettings";

export enum GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum {
    PurgeDataTypeUnspecified = "PURGE_DATA_TYPE_UNSPECIFIED"
,    DialogflowHistory = "DIALOGFLOW_HISTORY"
}

export enum GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum {
    RedactionScopeUnspecified = "REDACTION_SCOPE_UNSPECIFIED"
,    RedactDiskStorage = "REDACT_DISK_STORAGE"
}

export enum GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum {
    RedactionStrategyUnspecified = "REDACTION_STRATEGY_UNSPECIFIED"
,    RedactWithService = "REDACT_WITH_SERVICE"
}


// GoogleCloudDialogflowCxV3SecuritySettings
/** 
 * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
**/
export class GoogleCloudDialogflowCxV3SecuritySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioExportSettings" })
  audioExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings;

  @Metadata({ data: "json, name=deidentifyTemplate" })
  deidentifyTemplate?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=insightsExportSettings" })
  insightsExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings;

  @Metadata({ data: "json, name=inspectTemplate" })
  inspectTemplate?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=purgeDataTypes" })
  purgeDataTypes?: GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum[];

  @Metadata({ data: "json, name=redactionScope" })
  redactionScope?: GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum;

  @Metadata({ data: "json, name=redactionStrategy" })
  redactionStrategy?: GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum;

  @Metadata({ data: "json, name=retentionWindowDays" })
  retentionWindowDays?: number;
}
