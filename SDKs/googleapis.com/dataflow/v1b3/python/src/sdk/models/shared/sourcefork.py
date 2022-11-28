from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceFork:
    r"""SourceFork
    DEPRECATED in favor of DynamicSourceSplit.
    """
    
    primary: Optional[SourceSplitShard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    primary_source: Optional[DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primarySource') }})
    residual: Optional[SourceSplitShard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residual') }})
    residual_source: Optional[DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residualSource') }})
    
