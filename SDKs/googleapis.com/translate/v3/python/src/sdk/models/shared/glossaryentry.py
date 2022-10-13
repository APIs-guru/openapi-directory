from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import glossarytermspair
from . import glossarytermsset


@dataclass_json
@dataclass
class GlossaryEntry:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    terms_pair: Optional[glossarytermspair.GlossaryTermsPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsPair' }})
    terms_set: Optional[glossarytermsset.GlossaryTermsSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsSet' }})
    
