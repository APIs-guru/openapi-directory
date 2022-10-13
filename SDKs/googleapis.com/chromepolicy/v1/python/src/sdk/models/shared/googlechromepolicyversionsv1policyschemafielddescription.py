from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policyschemafielddependencies
from . import googlechromepolicyversionsv1policyschemafieldknownvaluedescription
from . import googlechromepolicyversionsv1policyschemafielddescription
from . import googlechromepolicyversionsv1policyschemarequireditems


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription:
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_dependencies: Optional[List[googlechromepolicyversionsv1policyschemafielddependencies.GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldDependencies' }})
    field_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldDescription' }})
    input_constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConstraint' }})
    known_value_descriptions: Optional[List[googlechromepolicyversionsv1policyschemafieldknownvaluedescription.GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownValueDescriptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nested_field_descriptions: Optional[List[googlechromepolicyversionsv1policyschemafielddescription.GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestedFieldDescriptions' }})
    required_items: Optional[List[googlechromepolicyversionsv1policyschemarequireditems.GoogleChromePolicyVersionsV1PolicySchemaRequiredItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredItems' }})
    
