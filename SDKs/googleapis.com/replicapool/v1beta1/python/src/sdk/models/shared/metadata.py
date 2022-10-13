from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataitem


@dataclass_json
@dataclass
class Metadata:
    finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerPrint' }})
    items: Optional[List[metadataitem.MetadataItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
