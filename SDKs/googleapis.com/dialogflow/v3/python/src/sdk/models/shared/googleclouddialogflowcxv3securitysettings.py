from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3securitysettingsaudioexportsettings
from . import googleclouddialogflowcxv3securitysettingsinsightsexportsettings

class GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum(str, Enum):
    PURGE_DATA_TYPE_UNSPECIFIED = "PURGE_DATA_TYPE_UNSPECIFIED"
    DIALOGFLOW_HISTORY = "DIALOGFLOW_HISTORY"

class GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum(str, Enum):
    REDACTION_SCOPE_UNSPECIFIED = "REDACTION_SCOPE_UNSPECIFIED"
    REDACT_DISK_STORAGE = "REDACT_DISK_STORAGE"

class GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum(str, Enum):
    REDACTION_STRATEGY_UNSPECIFIED = "REDACTION_STRATEGY_UNSPECIFIED"
    REDACT_WITH_SERVICE = "REDACT_WITH_SERVICE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3SecuritySettings:
    audio_export_settings: Optional[googleclouddialogflowcxv3securitysettingsaudioexportsettings.GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioExportSettings' }})
    deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplate' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    insights_export_settings: Optional[googleclouddialogflowcxv3securitysettingsinsightsexportsettings.GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insightsExportSettings' }})
    inspect_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purge_data_types: Optional[List[GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeDataTypes' }})
    redaction_scope: Optional[GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionScope' }})
    redaction_strategy: Optional[GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionStrategy' }})
    retention_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionWindowDays' }})
    
