from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedContactPhone:
    r"""ManagedContactPhone
    Information about how to reach this Contact by phone.
    
    """
    
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclass
class ManagedContactInput:
    r"""ManagedContactInput
    Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
    
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[ManagedContactPhone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    

@dataclass_json
@dataclass
class ManagedContact:
    r"""ManagedContact
    Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
    
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[ManagedContactPhone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
