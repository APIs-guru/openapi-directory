from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryContentMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclass
class EntryContent:
    care_context_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    checksum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    media: EntryContentMediaEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    
