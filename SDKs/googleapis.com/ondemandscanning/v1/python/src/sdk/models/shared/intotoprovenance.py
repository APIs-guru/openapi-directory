from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builderconfig
from . import metadata
from . import recipe


@dataclass_json
@dataclass
class InTotoProvenance:
    builder_config: Optional[builderconfig.BuilderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builderConfig' }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    recipe: Optional[recipe.Recipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipe' }})
    
