from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SpellingCorrection:
    r"""SpellingCorrection
    Output only. Spell check result.
    """
    
    corrected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corrected') }})
    corrected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedText') }})
    
