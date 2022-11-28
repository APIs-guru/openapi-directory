from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlossaryEntry:
    r"""GlossaryEntry
    Represents a single entry in a glossary.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    terms_pair: Optional[GlossaryTermsPair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsPair') }})
    terms_set: Optional[GlossaryTermsSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsSet') }})
    
