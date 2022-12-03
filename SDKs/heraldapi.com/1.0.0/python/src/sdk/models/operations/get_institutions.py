from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetInstitutions200ApplicationJSON:
    institutions: Optional[list[shared.InstitutionV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('institutions') }})
    

@dataclass
class GetInstitutionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_institutions_200_application_json_object: Optional[GetInstitutions200ApplicationJSON] = field(default=None)
    
