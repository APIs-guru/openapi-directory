from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metadatalabelmatcher


@dataclass_json
@dataclass
class EndpointMatcher:
    metadata_label_matcher: Optional[metadatalabelmatcher.MetadataLabelMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLabelMatcher' }})
    
