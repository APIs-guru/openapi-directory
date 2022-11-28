from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PreprintsCreatePreprintAttributesInput:
    r"""PreprintsCreatePreprintAttributesInput
    The properties of the preprint entity.
    """
    
    doi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doi') }})
    license_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_record') }})
    subjects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    

@dataclass_json
@dataclass
class PreprintsCreatePreprintRelationshipsInput:
    r"""PreprintsCreatePreprintRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the preprint entity.
    """
    
    node: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    primary_file: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_file') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    

@dataclass_json
@dataclass
class PreprintsCreatePreprintInput:
    relationships: PreprintsCreatePreprintRelationshipsInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    attributes: Optional[PreprintsCreatePreprintAttributesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class PreprintsCreateRequest:
    request: PreprintsCreatePreprintInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreprintsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
