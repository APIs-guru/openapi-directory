from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import sourcemetadata


@dataclass_json
@dataclass
class Source:
    base_specs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseSpecs' }})
    codec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    does_not_need_splitting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doesNotNeedSplitting' }})
    metadata: Optional[sourcemetadata.SourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
