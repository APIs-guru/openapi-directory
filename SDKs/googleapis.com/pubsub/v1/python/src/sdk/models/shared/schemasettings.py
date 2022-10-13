from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SchemaSettingsEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    JSON = "JSON"
    BINARY = "BINARY"


@dataclass_json
@dataclass
class SchemaSettings:
    encoding: Optional[SchemaSettingsEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    first_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstRevisionId' }})
    last_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRevisionId' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
