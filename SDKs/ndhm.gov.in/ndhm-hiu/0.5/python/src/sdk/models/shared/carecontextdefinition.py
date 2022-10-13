from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CareContextDefinition:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    patient_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patientReference' }})
    
