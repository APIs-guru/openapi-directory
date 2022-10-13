from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source


@dataclass_json
@dataclass
class SourceGetMetadataRequest:
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
