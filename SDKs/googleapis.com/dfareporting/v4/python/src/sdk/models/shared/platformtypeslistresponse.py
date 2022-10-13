from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import platformtype


@dataclass_json
@dataclass
class PlatformTypesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    platform_types: Optional[List[platformtype.PlatformType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformTypes' }})
    
