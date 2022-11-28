from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlossaryTermsSet:
    r"""GlossaryTermsSet
    Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
    """
    
    terms: Optional[List[GlossaryTerm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
