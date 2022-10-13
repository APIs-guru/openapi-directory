from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourceobjectreference


@dataclass_json
@dataclass
class DataSourceObjectReferences:
    references: Optional[List[datasourceobjectreference.DataSourceObjectReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    
