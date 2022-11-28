from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UsersPartialUpdatePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUserAttributesInput:
    r"""UsersPartialUpdateUserAttributesInput
    The properties of the user entity.
    """
    
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family_name') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('given_name') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    middle_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_names') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUserInput:
    attributes: UsersPartialUpdateUserAttributesInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class UsersPartialUpdateRequest:
    path_params: UsersPartialUpdatePathParams = field()
    request: UsersPartialUpdateUserInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
