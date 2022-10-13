from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainMembership:
    in_viewer_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inViewerDomain' }})
    
