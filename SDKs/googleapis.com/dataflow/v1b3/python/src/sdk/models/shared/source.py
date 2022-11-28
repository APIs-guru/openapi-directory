from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    A source that records can be read and decoded from.
    """
    
    base_specs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseSpecs') }})
    codec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    does_not_need_splitting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotNeedSplitting') }})
    metadata: Optional[SourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
