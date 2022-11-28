from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransferOptionsOverwriteWhenEnum(str, Enum):
    OVERWRITE_WHEN_UNSPECIFIED = "OVERWRITE_WHEN_UNSPECIFIED"
    DIFFERENT = "DIFFERENT"
    NEVER = "NEVER"
    ALWAYS = "ALWAYS"


@dataclass_json
@dataclass
class TransferOptions:
    r"""TransferOptions
    TransferOptions define the actions to be performed on objects in a transfer.
    """
    
    delete_objects_from_source_after_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteObjectsFromSourceAfterTransfer') }})
    delete_objects_unique_in_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteObjectsUniqueInSink') }})
    metadata_options: Optional[MetadataOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataOptions') }})
    overwrite_objects_already_existing_in_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteObjectsAlreadyExistingInSink') }})
    overwrite_when: Optional[TransferOptionsOverwriteWhenEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteWhen') }})
    
