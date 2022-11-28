from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DerivedSourceDerivationModeEnum(str, Enum):
    SOURCE_DERIVATION_MODE_UNKNOWN = "SOURCE_DERIVATION_MODE_UNKNOWN"
    SOURCE_DERIVATION_MODE_INDEPENDENT = "SOURCE_DERIVATION_MODE_INDEPENDENT"
    SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
    SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"


@dataclass_json
@dataclass
class DerivedSource:
    r"""DerivedSource
    Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
    """
    
    derivation_mode: Optional[DerivedSourceDerivationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivationMode') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
