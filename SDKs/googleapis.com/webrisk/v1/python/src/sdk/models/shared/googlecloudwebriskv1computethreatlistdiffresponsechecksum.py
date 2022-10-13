from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum:
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256' }})
    
