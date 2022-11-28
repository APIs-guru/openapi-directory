from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FeedbackLoop:
    r"""FeedbackLoop
    [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    spam_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spamRatio') }})
    
