from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class EntryLinkMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclass
class EntryLink:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    checksum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    media: EntryLinkMediaEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    
