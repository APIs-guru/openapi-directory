from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1GcsDestination:
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uriPrefix' }})
    
