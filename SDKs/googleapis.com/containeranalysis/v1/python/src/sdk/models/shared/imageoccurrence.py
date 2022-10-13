from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fingerprint
from . import layer


@dataclass_json
@dataclass
class ImageOccurrence:
    base_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseResourceUrl' }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    fingerprint: Optional[fingerprint.Fingerprint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    layer_info: Optional[List[layer.Layer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerInfo' }})
    
