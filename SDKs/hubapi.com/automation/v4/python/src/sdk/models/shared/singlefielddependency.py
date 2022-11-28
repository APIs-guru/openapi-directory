from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SingleFieldDependencyDependencyTypeEnum(str, Enum):
    SINGLE_FIELD = "SINGLE_FIELD"


@dataclass_json
@dataclass
class SingleFieldDependency:
    controlling_field_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldName') }})
    dependency_type: SingleFieldDependencyDependencyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    dependent_field_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentFieldNames') }})
    
