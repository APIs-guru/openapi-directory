from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3advancedsettings
from . import googleclouddialogflowcxv3speechtotextsettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Agent:
    advanced_settings: Optional[googleclouddialogflowcxv3advancedsettings.GoogleCloudDialogflowCxV3AdvancedSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advancedSettings' }})
    avatar_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUri' }})
    default_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguageCode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_spell_correction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSpellCorrection' }})
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverLogging' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    security_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securitySettings' }})
    speech_to_text_settings: Optional[googleclouddialogflowcxv3speechtotextsettings.GoogleCloudDialogflowCxV3SpeechToTextSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechToTextSettings' }})
    start_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startFlow' }})
    supported_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedLanguageCodes' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
