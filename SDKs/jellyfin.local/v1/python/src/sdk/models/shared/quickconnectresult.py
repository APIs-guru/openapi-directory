from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuickConnectResult:
    r"""QuickConnectResult
    Stores the result of an incoming quick connect request.
    """
    
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authenticated') }})
    authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authentication') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    date_added: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateAdded'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Secret') }})
    
