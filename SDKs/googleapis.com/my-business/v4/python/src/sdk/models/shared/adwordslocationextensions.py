from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdWordsLocationExtensions:
    r"""AdWordsLocationExtensions
    Additional information that is surfaced in AdWords.
    """
    
    ad_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adPhone') }})
    
