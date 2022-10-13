from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import semanticversion


@dataclass_json
@dataclass
class BuildVersion:
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    version: Optional[semanticversion.SemanticVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
