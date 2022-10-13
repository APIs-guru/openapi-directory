from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidationConfig:
    disable_fhirpath_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableFhirpathValidation' }})
    disable_profile_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableProfileValidation' }})
    disable_reference_type_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableReferenceTypeValidation' }})
    disable_required_field_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableRequiredFieldValidation' }})
    enabled_implementation_guides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledImplementationGuides' }})
    
