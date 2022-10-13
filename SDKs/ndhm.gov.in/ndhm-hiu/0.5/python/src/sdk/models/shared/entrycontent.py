from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class EntryContentMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclass
class EntryContent:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    checksum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    media: EntryContentMediaEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    
