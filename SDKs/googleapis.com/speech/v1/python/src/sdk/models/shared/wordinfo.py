from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WordInfo:
    r"""WordInfo
    Word-specific information for recognized words.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    speaker_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speakerTag') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    word: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('word') }})
    
