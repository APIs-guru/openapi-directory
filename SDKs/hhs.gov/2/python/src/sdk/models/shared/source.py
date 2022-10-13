from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Source:
    acronym: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acronym' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmail' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    large_logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeLogoUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    small_logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallLogoUrl' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
