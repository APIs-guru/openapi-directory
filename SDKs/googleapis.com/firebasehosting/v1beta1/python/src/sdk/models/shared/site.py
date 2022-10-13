from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SiteTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DEFAULT_SITE = "DEFAULT_SITE"
    USER_SITE = "USER_SITE"


@dataclass_json
@dataclass
class Site:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    default_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultUrl' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[SiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
