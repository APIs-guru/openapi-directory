from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Settings:
    r"""Settings
    Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
    """
    
    disable_default_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDefaultSink') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    kms_service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsServiceAccountId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    storage_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageLocation') }})
    

@dataclass_json
@dataclass
class SettingsInput:
    r"""SettingsInput
    Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
    """
    
    disable_default_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDefaultSink') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    storage_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageLocation') }})
    
