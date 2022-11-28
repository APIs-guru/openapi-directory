from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription:
    r"""GoogleChromePolicyVersionsV1PolicySchemaFieldDescription
    Provides detailed information for a particular field that is part of a PolicySchema.
    """
    
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_dependencies: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldDependencies') }})
    field_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldDescription') }})
    input_constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConstraint') }})
    known_value_descriptions: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownValueDescriptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nested_field_descriptions: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestedFieldDescriptions') }})
    required_items: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaRequiredItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredItems') }})
    
