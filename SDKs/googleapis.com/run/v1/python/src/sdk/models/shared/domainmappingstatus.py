from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv1condition
from . import resourcerecord


@dataclass_json
@dataclass
class DomainMappingStatus:
    conditions: Optional[List[googlecloudrunv1condition.GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    mapped_route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappedRouteName' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    resource_records: Optional[List[resourcerecord.ResourceRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRecords' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
