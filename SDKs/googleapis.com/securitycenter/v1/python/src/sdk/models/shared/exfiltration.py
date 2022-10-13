from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exfilresource
from . import exfilresource


@dataclass_json
@dataclass
class Exfiltration:
    sources: Optional[List[exfilresource.ExfilResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    targets: Optional[List[exfilresource.ExfilResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
