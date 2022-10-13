from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operatingsystemversion


@dataclass_json
@dataclass
class OperatingSystemVersionsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    operating_system_versions: Optional[List[operatingsystemversion.OperatingSystemVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemVersions' }})
    
