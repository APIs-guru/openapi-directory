from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import glossaryterm
from . import glossaryterm


@dataclass_json
@dataclass
class GlossaryTermsPair:
    source_term: Optional[glossaryterm.GlossaryTerm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTerm' }})
    target_term: Optional[glossaryterm.GlossaryTerm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetTerm' }})
    
