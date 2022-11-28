from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON:
    completion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    

@dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressRequest:
    path_params: GetUsersUserEmailOfferingsOfferingIDProgressPathParams = field()
    

@dataclass
class GetUsersUserEmailOfferingsOfferingIDProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_users_user_email_offerings_offering_id_progress_200_application_json_object: Optional[GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON] = field(default=None)
    
