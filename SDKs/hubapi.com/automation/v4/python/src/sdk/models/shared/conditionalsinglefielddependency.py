from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConditionalSingleFieldDependencyDependencyTypeEnum(str, Enum):
    CONDITIONAL_SINGLE_FIELD = "CONDITIONAL_SINGLE_FIELD"


@dataclass_json
@dataclass
class ConditionalSingleFieldDependency:
    controlling_field_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldName') }})
    controlling_field_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldValue') }})
    dependency_type: ConditionalSingleFieldDependencyDependencyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    dependent_field_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentFieldNames') }})
    
