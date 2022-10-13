from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import source

class SourceSplitShardDerivationModeEnum(str, Enum):
    SOURCE_DERIVATION_MODE_UNKNOWN = "SOURCE_DERIVATION_MODE_UNKNOWN"
    SOURCE_DERIVATION_MODE_INDEPENDENT = "SOURCE_DERIVATION_MODE_INDEPENDENT"
    SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
    SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"


@dataclass_json
@dataclass
class SourceSplitShard:
    derivation_mode: Optional[SourceSplitShardDerivationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivationMode' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
