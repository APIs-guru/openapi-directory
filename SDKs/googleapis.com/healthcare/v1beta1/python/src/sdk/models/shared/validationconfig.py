from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidationConfig:
    r"""ValidationConfig
    Contains the configuration for FHIR profiles and validation.
    """
    
    disable_fhirpath_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableFhirpathValidation') }})
    disable_profile_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProfileValidation') }})
    disable_reference_type_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableReferenceTypeValidation') }})
    disable_required_field_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableRequiredFieldValidation') }})
    enabled_implementation_guides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledImplementationGuides') }})
    
