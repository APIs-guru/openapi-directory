from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnnotationBoundary:
    r"""GoogleCloudContactcenterinsightsV1AnnotationBoundary
    A point in a conversation that marks the start or the end of an annotation.
    """
    
    transcript_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptIndex') }})
    word_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordIndex') }})
    
