from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import securitycenterproperties
from . import googlecloudsecuritycenterv1beta1securitymarks


@dataclass_json
@dataclass
class Asset:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProperties' }})
    security_center_properties: Optional[securitycenterproperties.SecurityCenterProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityCenterProperties' }})
    security_marks: Optional[googlecloudsecuritycenterv1beta1securitymarks.GoogleCloudSecuritycenterV1beta1SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityMarks' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
