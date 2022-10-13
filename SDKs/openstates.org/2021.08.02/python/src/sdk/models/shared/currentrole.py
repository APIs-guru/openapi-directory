from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import orgclassification_enum


@dataclass_json
@dataclass
class CurrentRole:
    district: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division_id' }})
    org_classification: orgclassification_enum.OrgClassificationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_classification' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
