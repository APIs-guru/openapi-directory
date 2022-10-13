from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FacetOptions:
    num_facet_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numFacetBuckets' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceName' }})
    
