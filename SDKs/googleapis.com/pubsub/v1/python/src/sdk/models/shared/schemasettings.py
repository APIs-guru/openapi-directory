from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SchemaSettingsEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    JSON = "JSON"
    BINARY = "BINARY"


@dataclass_json
@dataclass
class SchemaSettings:
    r"""SchemaSettings
    Settings for validating messages published against a schema.
    """
    
    encoding: Optional[SchemaSettingsEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    first_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstRevisionId') }})
    last_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRevisionId') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
