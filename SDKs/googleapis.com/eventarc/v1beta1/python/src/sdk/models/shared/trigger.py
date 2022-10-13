from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destination
from . import matchingcriteria
from . import transport


@dataclass_json
@dataclass
class Trigger:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destination: Optional[destination.Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    matching_criteria: Optional[List[matchingcriteria.MatchingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingCriteria' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    transport: Optional[transport.Transport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
