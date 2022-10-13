from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationresult


@dataclass_json
@dataclass
class ValidateCreateMembershipResponse:
    validation_results: Optional[List[validationresult.ValidationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationResults' }})
    
