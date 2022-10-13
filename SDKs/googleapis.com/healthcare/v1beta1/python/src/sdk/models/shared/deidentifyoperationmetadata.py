from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fhiroutput


@dataclass_json
@dataclass
class DeidentifyOperationMetadata:
    fhir_output: Optional[fhiroutput.FhirOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fhirOutput' }})
    
