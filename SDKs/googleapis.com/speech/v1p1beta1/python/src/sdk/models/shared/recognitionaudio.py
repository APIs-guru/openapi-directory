from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecognitionAudio:
    r"""RecognitionAudio
    Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
