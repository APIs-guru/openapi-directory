from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1ExternalSystem:
    r"""GoogleCloudSecuritycenterV1ExternalSystem
    Representation of third party SIEM/SOAR fields within SCC.
    """
    
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    external_system_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalSystemUpdateTime') }})
    external_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
