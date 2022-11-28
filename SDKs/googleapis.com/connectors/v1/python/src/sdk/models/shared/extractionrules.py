from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtractionRules:
    r"""ExtractionRules
    Extraction Rules to identity the backends from customer provided configuration in Connection resource.
    """
    
    extraction_rule: Optional[List[ExtractionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionRule') }})
    
