from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FieldMetadataActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    TRANSFORM = "TRANSFORM"
    INSPECT_AND_TRANSFORM = "INSPECT_AND_TRANSFORM"
    DO_NOT_TRANSFORM = "DO_NOT_TRANSFORM"


@dataclass_json
@dataclass
class FieldMetadata:
    r"""FieldMetadata
    Specifies FHIR paths to match, and how to handle de-identification of matching fields.
    """
    
    action: Optional[FieldMetadataActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    
