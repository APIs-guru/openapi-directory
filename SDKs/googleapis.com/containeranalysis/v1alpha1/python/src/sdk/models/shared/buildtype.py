from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buildsignature


@dataclass_json
@dataclass
class BuildType:
    builder_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builderVersion' }})
    signature: Optional[buildsignature.BuildSignature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    
