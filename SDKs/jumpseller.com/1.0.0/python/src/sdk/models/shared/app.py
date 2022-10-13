from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appfields


@dataclass_json
@dataclass
class App:
    apps: Optional[List[appfields.AppFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    
