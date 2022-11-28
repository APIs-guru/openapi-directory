from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchProperNounCategorizedOut:
    r"""BatchProperNounCategorizedOut
    Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
    """
    
    proper_nouns: Optional[List[ProperNounCategorizedOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properNouns') }})
    
