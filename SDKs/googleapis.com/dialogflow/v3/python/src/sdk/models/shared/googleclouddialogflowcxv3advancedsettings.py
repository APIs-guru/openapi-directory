from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3advancedsettingsloggingsettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3AdvancedSettings:
    logging_settings: Optional[googleclouddialogflowcxv3advancedsettingsloggingsettings.GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingSettings' }})
    
