from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import size


@dataclass_json
@dataclass
class SiteCompanionSetting:
    companions_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionsDisabled' }})
    enabled_sizes: Optional[List[size.Size]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledSizes' }})
    image_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageOnly' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
