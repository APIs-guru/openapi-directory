from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import variantoptiondefinition


@dataclass_json
@dataclass
class VariantOptionDefinitions:
    definitions: List[variantoptiondefinition.VariantOptionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    
