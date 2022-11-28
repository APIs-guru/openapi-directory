from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultCounts:
    r"""ResultCounts
    Result count information
    """
    
    source_result_counts: Optional[List[SourceResultCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceResultCounts') }})
    
