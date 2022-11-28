from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceTransferEntities:
    r"""ServiceTransferEntities
    A collection of the services to include in this transfer request, separated by type.
    
    """
    
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linodes') }})
    
class ServiceTransferStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    CANCELLED = "cancelled"
    COMPLETED = "completed"
    FAILED = "failed"
    PENDING = "pending"
    STALE = "stale"


@dataclass_json
@dataclass
class ServiceTransfer:
    r"""ServiceTransfer
    An object representing a Service Transfer.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entities: Optional[ServiceTransferEntities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_sender: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_sender') }})
    status: Optional[ServiceTransferStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
