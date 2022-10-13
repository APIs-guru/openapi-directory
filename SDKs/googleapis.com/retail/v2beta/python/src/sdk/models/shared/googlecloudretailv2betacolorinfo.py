from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaColorInfo:
    color_families: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorFamilies' }})
    colors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    
