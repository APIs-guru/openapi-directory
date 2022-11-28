from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FhirOutput:
    r"""FhirOutput
    Details about the FHIR store to write the output to.
    """
    
    fhir_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fhirStore') }})
    
