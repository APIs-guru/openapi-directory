from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1advancedsettingsloggingsettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1AdvancedSettings:
    logging_settings: Optional[googleclouddialogflowcxv3beta1advancedsettingsloggingsettings.GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingSettings' }})
    
