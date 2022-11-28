from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
    An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.
    """
    
    attribute_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeDefinitionId') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
