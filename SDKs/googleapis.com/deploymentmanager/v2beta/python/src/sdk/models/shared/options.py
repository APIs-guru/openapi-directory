from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asyncoptions
from . import inputmapping
from . import validationoptions


@dataclass_json
@dataclass
class Options:
    async_options: Optional[List[asyncoptions.AsyncOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asyncOptions' }})
    input_mappings: Optional[List[inputmapping.InputMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputMappings' }})
    validation_options: Optional[validationoptions.ValidationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationOptions' }})
    virtual_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualProperties' }})
    
