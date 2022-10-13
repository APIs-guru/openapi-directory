from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import slsabuilder
from . import material
from . import slsametadata
from . import slsarecipe


@dataclass_json
@dataclass
class SlsaProvenance:
    builder: Optional[slsabuilder.SlsaBuilder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builder' }})
    materials: Optional[List[material.Material]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    metadata: Optional[slsametadata.SlsaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    recipe: Optional[slsarecipe.SlsaRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipe' }})
    
