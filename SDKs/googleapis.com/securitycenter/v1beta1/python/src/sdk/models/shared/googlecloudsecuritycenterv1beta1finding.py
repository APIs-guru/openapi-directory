from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudsecuritycenterv1beta1securitymarks

class GoogleCloudSecuritycenterV1beta1FindingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1beta1Finding:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    external_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalUri' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    security_marks: Optional[googlecloudsecuritycenterv1beta1securitymarks.GoogleCloudSecuritycenterV1beta1SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityMarks' }})
    source_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProperties' }})
    state: Optional[GoogleCloudSecuritycenterV1beta1FindingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
