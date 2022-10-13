from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CertificateMapEntryMatcherEnum(str, Enum):
    MATCHER_UNSPECIFIED = "MATCHER_UNSPECIFIED"
    PRIMARY = "PRIMARY"

class CertificateMapEntryStateEnum(str, Enum):
    SERVING_STATE_UNSPECIFIED = "SERVING_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class CertificateMapEntry:
    certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    matcher: Optional[CertificateMapEntryMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matcher' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[CertificateMapEntryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
