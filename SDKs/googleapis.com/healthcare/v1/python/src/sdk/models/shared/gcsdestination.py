from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GcsDestinationContentStructureEnum(str, Enum):
    CONTENT_STRUCTURE_UNSPECIFIED = "CONTENT_STRUCTURE_UNSPECIFIED"
    MESSAGE_JSON = "MESSAGE_JSON"

class GcsDestinationMessageViewEnum(str, Enum):
    MESSAGE_VIEW_UNSPECIFIED = "MESSAGE_VIEW_UNSPECIFIED"
    RAW_ONLY = "RAW_ONLY"
    PARSED_ONLY = "PARSED_ONLY"
    FULL = "FULL"
    SCHEMATIZED_ONLY = "SCHEMATIZED_ONLY"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class GcsDestination:
    r"""GcsDestination
    The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.
    """
    
    content_structure: Optional[GcsDestinationContentStructureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStructure') }})
    message_view: Optional[GcsDestinationMessageViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageView') }})
    uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriPrefix') }})
    
