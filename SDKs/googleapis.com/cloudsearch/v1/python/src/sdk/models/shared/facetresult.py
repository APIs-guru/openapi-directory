from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facetbucket


@dataclass_json
@dataclass
class FacetResult:
    buckets: Optional[List[facetbucket.FacetBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buckets' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceName' }})
    
