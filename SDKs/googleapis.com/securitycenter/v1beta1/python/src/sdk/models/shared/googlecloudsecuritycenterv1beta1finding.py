from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudSecuritycenterV1beta1FindingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1beta1Finding:
    r"""GoogleCloudSecuritycenterV1beta1Finding
    Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    external_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    security_marks: Optional[GoogleCloudSecuritycenterV1beta1SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    source_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    state: Optional[GoogleCloudSecuritycenterV1beta1FindingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
