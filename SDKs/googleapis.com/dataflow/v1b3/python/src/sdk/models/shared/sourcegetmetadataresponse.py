from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcemetadata


@dataclass_json
@dataclass
class SourceGetMetadataResponse:
    metadata: Optional[sourcemetadata.SourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
