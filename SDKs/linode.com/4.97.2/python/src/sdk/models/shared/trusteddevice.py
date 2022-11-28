from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrustedDevice:
    r"""TrustedDevice
    A trusted device object represents an active Remember Me session with <a target=\"_top\" href=\"https://login.linode.com\">login.linode.com</a>.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_authenticated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_authenticated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_remote_addr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_remote_addr') }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_agent') }})
    
