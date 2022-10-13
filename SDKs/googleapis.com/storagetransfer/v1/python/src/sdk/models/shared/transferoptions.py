from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metadataoptions

class TransferOptionsOverwriteWhenEnum(str, Enum):
    OVERWRITE_WHEN_UNSPECIFIED = "OVERWRITE_WHEN_UNSPECIFIED"
    DIFFERENT = "DIFFERENT"
    NEVER = "NEVER"
    ALWAYS = "ALWAYS"


@dataclass_json
@dataclass
class TransferOptions:
    delete_objects_from_source_after_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteObjectsFromSourceAfterTransfer' }})
    delete_objects_unique_in_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteObjectsUniqueInSink' }})
    metadata_options: Optional[metadataoptions.MetadataOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataOptions' }})
    overwrite_objects_already_existing_in_sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwriteObjectsAlreadyExistingInSink' }})
    overwrite_when: Optional[TransferOptionsOverwriteWhenEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwriteWhen' }})
    
