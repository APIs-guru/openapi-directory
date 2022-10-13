from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mobileapp


@dataclass_json
@dataclass
class DeepLink:
    app_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appUrl' }})
    fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallbackUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mobile_app: Optional[mobileapp.MobileApp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApp' }})
    remarketing_list_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remarketingListIds' }})
    
