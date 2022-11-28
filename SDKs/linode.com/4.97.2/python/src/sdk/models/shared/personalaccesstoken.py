from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PersonalAccessTokenInput:
    r"""PersonalAccessTokenInput
    A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
    
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclass
class PersonalAccessToken:
    r"""PersonalAccessToken
    A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    scopes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
