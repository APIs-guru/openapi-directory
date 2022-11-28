from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErskineMayIndexTermSeeLink:
    index_term_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexTermId') }})
    see_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeType') }})
    see_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeValue') }})
    
