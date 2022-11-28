from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackScriptInput:
    r"""StackScriptInput
    A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
    
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_public') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    rev_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rev_note') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

@dataclass_json
@dataclass
class StackScript:
    r"""StackScript
    A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployments_active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_active') }})
    deployments_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_total') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_public') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    mine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mine') }})
    rev_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rev_note') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_defined_fields: Optional[List[UserDefinedField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_defined_fields') }})
    user_gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_gravatar_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
