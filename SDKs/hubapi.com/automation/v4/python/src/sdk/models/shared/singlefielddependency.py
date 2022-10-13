from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class SingleFieldDependencyDependencyTypeEnum(str, Enum):
    SINGLE_FIELD = "SINGLE_FIELD"


@dataclass_json
@dataclass
class SingleFieldDependency:
    controlling_field_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controllingFieldName' }})
    dependency_type: SingleFieldDependencyDependencyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencyType' }})
    dependent_field_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependentFieldNames' }})
    
