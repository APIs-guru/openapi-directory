from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Topic:
    r"""Topic
    A topic resource.
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageRetentionDuration') }})
    message_storage_policy: Optional[MessageStoragePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageStoragePolicy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    schema_settings: Optional[SchemaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaSettings') }})
    
