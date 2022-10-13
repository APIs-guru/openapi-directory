from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClickThroughURLSuffixProperties:
    click_through_url_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrlSuffix' }})
    override_inherited_suffix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideInheritedSuffix' }})
    
