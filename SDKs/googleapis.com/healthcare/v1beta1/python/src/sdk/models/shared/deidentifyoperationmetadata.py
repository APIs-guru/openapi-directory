from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeidentifyOperationMetadata:
    r"""DeidentifyOperationMetadata
    Details about the work the de-identify operation performed.
    """
    
    fhir_output: Optional[FhirOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fhirOutput') }})
    
