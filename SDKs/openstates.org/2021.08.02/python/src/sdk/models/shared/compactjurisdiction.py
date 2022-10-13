from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import jurisdictionclassification_enum


@dataclass_json
@dataclass
class CompactJurisdiction:
    classification: jurisdictionclassification_enum.JurisdictionClassificationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
