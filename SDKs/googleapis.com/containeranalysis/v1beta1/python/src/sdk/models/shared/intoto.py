from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifactrule
from . import artifactrule
from . import signingkey


@dataclass_json
@dataclass
class InToto:
    expected_command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedCommand' }})
    expected_materials: Optional[List[artifactrule.ArtifactRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedMaterials' }})
    expected_products: Optional[List[artifactrule.ArtifactRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedProducts' }})
    signing_keys: Optional[List[signingkey.SigningKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeys' }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepName' }})
    threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
