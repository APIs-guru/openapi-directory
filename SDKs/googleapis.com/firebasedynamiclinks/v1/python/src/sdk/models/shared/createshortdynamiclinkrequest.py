from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dynamiclinkinfo
from . import suffix


@dataclass_json
@dataclass
class CreateShortDynamicLinkRequest:
    dynamic_link_info: Optional[dynamiclinkinfo.DynamicLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicLinkInfo' }})
    long_dynamic_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDynamicLink' }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkVersion' }})
    suffix: Optional[suffix.Suffix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    
