from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import carecontextrepresentation
from . import identifiertype_enum


@dataclass_json
@dataclass
class PatientRepresentation:
    care_contexts: List[carecontextrepresentation.CareContextRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    display: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    matched_by: Optional[List[identifiertype_enum.IdentifierTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedBy' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    
