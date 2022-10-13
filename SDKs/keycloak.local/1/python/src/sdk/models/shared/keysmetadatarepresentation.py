from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import keysmetadatarepresentation_keymetadatarepresentation


@dataclass_json
@dataclass
class KeysMetadataRepresentation:
    active: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    keys: Optional[List[keysmetadatarepresentation_keymetadatarepresentation.KeysMetadataRepresentationKeyMetadataRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    
