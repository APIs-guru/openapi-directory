from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TagKeyPurposeEnum(str, Enum):
    PURPOSE_UNSPECIFIED = "PURPOSE_UNSPECIFIED"
    GCE_FIREWALL = "GCE_FIREWALL"


@dataclass_json
@dataclass
class TagKey:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespaced_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedName' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    purpose: Optional[TagKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    purpose_data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purposeData' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
