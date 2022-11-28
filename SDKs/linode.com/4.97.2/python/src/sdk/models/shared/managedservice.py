from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManagedServiceServiceTypeEnum(str, Enum):
    URL = "url"
    TCP = "tcp"

class ManagedServiceStatusEnum(str, Enum):
    DISABLED = "disabled"
    PENDING = "pending"
    OK = "ok"
    PROBLEM = "problem"


@dataclass_json
@dataclass
class ManagedServiceInput:
    r"""ManagedServiceInput
    A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
    
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    consultation_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultation_group') }})
    credentials: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    service_type: Optional[ManagedServiceServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass_json
@dataclass
class ManagedService:
    r"""ManagedService
    A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
    
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    consultation_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultation_group') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    service_type: Optional[ManagedServiceServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    status: Optional[ManagedServiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
