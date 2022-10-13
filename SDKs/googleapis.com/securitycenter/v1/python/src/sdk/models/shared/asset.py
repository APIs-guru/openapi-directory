from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import iampolicy
from . import securitycenterproperties
from . import securitymarks


@dataclass_json
@dataclass
class Asset:
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalName' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    iam_policy: Optional[iampolicy.IamPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamPolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProperties' }})
    security_center_properties: Optional[securitycenterproperties.SecurityCenterProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityCenterProperties' }})
    security_marks: Optional[securitymarks.SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityMarks' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
