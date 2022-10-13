from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametervalidation


@dataclass_json
@dataclass
class TemplateParameter:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    validation: Optional[parametervalidation.ParameterValidation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
