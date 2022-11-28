from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ParameterMetadataParamTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    TEXT = "TEXT"
    GCS_READ_BUCKET = "GCS_READ_BUCKET"
    GCS_WRITE_BUCKET = "GCS_WRITE_BUCKET"
    GCS_READ_FILE = "GCS_READ_FILE"
    GCS_WRITE_FILE = "GCS_WRITE_FILE"
    GCS_READ_FOLDER = "GCS_READ_FOLDER"
    GCS_WRITE_FOLDER = "GCS_WRITE_FOLDER"
    PUBSUB_TOPIC = "PUBSUB_TOPIC"
    PUBSUB_SUBSCRIPTION = "PUBSUB_SUBSCRIPTION"


@dataclass_json
@dataclass
class ParameterMetadata:
    r"""ParameterMetadata
    Metadata for a specific parameter.
    """
    
    custom_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetadata') }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpText') }})
    is_optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOptional') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    param_type: Optional[ParameterMetadataParamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramType') }})
    regexes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexes') }})
    
