from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesDraftRegistrationsPartialUpdatePathParams:
    draft_id: str = field(metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput:
    r"""NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
    The properties of the draft registration entity.
    """
    
    registration_supplement: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_supplement') }})
    registration_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_metadata') }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsPartialUpdateDraftRegistrationInput:
    attributes: NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class NodesDraftRegistrationsPartialUpdateRequest:
    path_params: NodesDraftRegistrationsPartialUpdatePathParams = field()
    request: NodesDraftRegistrationsPartialUpdateDraftRegistrationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesDraftRegistrationsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
