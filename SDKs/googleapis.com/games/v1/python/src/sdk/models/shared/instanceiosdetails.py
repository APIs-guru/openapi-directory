from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceIosDetails:
    bundle_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleIdentifier' }})
    itunes_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itunesAppId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    preferred_for_ipad: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredForIpad' }})
    preferred_for_iphone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredForIphone' }})
    support_ipad: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportIpad' }})
    support_iphone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportIphone' }})
    
