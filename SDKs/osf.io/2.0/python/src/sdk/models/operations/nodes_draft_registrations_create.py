from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesDraftRegistrationsCreatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput:
    r"""NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
    The properties of the draft registration entity.
    """
    
    registration_supplement: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_supplement') }})
    registration_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_metadata') }})
    

@dataclass_json
@dataclass
class NodesDraftRegistrationsCreateDraftRegistrationInput:
    attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributesInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class NodesDraftRegistrationsCreateRequest:
    path_params: NodesDraftRegistrationsCreatePathParams = field()
    request: NodesDraftRegistrationsCreateDraftRegistrationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesDraftRegistrationsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
