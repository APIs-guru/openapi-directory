from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1securitysettingsaudioexportsettings
from . import googleclouddialogflowcxv3beta1securitysettingsinsightsexportsettings

class GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum(str, Enum):
    PURGE_DATA_TYPE_UNSPECIFIED = "PURGE_DATA_TYPE_UNSPECIFIED"
    DIALOGFLOW_HISTORY = "DIALOGFLOW_HISTORY"

class GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum(str, Enum):
    REDACTION_SCOPE_UNSPECIFIED = "REDACTION_SCOPE_UNSPECIFIED"
    REDACT_DISK_STORAGE = "REDACT_DISK_STORAGE"

class GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum(str, Enum):
    REDACTION_STRATEGY_UNSPECIFIED = "REDACTION_STRATEGY_UNSPECIFIED"
    REDACT_WITH_SERVICE = "REDACT_WITH_SERVICE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SecuritySettings:
    audio_export_settings: Optional[googleclouddialogflowcxv3beta1securitysettingsaudioexportsettings.GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioExportSettings' }})
    deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplate' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    insights_export_settings: Optional[googleclouddialogflowcxv3beta1securitysettingsinsightsexportsettings.GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insightsExportSettings' }})
    inspect_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purge_data_types: Optional[List[GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeDataTypes' }})
    redaction_scope: Optional[GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionScope' }})
    redaction_strategy: Optional[GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionStrategy' }})
    retention_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionWindowDays' }})
    
