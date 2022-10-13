from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import organization


@dataclass_json
@dataclass
class CityList:
    organization: organization.Organization = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    
