from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2SpeechContext:
    r"""GoogleCloudVideointelligenceV1beta2SpeechContext
    Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.
    """
    
    phrases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
