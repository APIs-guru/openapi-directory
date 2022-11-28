from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnrichmentRequest:
    aspect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspect') }})
    genes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genes') }})
    species: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('species') }})
    
