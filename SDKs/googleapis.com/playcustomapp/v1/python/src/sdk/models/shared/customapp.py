from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organization


@dataclass_json
@dataclass
class CustomApp:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    organizations: Optional[List[organization.Organization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
