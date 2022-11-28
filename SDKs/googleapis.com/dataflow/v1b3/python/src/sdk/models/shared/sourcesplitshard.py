from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SourceSplitShardDerivationModeEnum(str, Enum):
    SOURCE_DERIVATION_MODE_UNKNOWN = "SOURCE_DERIVATION_MODE_UNKNOWN"
    SOURCE_DERIVATION_MODE_INDEPENDENT = "SOURCE_DERIVATION_MODE_INDEPENDENT"
    SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
    SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"


@dataclass_json
@dataclass
class SourceSplitShard:
    r"""SourceSplitShard
    DEPRECATED in favor of DerivedSource.
    """
    
    derivation_mode: Optional[SourceSplitShardDerivationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivationMode') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
