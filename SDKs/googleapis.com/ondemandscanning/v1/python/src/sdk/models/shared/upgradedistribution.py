from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpgradeDistribution:
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    cve: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cve' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
