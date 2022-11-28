from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryLinkMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclass
class EntryLink:
    care_context_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    checksum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    media: EntryLinkMediaEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    
