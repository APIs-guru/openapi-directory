from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SmsResponseCreateReport:
    links: Optional[shared.LinksCreateReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    account_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ref' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    client_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_ref' }})
    date_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: shared.DirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    include_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_message' }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_subaccounts' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    product: shared.ProductSmsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    receive_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receive_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusCreateReportEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_concatenated' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared.SmsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
