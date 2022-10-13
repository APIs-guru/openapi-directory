from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class ConditionalSingleFieldDependencyDependencyTypeEnum(str, Enum):
    CONDITIONAL_SINGLE_FIELD = "CONDITIONAL_SINGLE_FIELD"


@dataclass_json
@dataclass
class ConditionalSingleFieldDependency:
    controlling_field_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controllingFieldName' }})
    controlling_field_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controllingFieldValue' }})
    dependency_type: ConditionalSingleFieldDependencyDependencyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencyType' }})
    dependent_field_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependentFieldNames' }})
    
