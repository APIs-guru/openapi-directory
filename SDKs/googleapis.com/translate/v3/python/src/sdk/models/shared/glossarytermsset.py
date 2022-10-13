from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import glossaryterm


@dataclass_json
@dataclass
class GlossaryTermsSet:
    terms: Optional[List[glossaryterm.GlossaryTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
