from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnnotationBoundary:
    transcript_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcriptIndex' }})
    word_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wordIndex' }})
    
