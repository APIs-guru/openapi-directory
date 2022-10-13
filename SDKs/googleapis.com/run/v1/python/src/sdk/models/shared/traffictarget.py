from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrafficTarget:
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationName' }})
    latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRevision' }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent' }})
    revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionName' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
