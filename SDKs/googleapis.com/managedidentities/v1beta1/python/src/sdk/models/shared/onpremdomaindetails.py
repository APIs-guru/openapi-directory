from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OnPremDomainDetails:
    disable_sid_filtering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSidFiltering' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    
