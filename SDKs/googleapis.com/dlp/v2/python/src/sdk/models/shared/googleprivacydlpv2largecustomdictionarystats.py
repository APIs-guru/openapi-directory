from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LargeCustomDictionaryStats:
    r"""GooglePrivacyDlpV2LargeCustomDictionaryStats
    Summary statistics of a custom dictionary.
    """
    
    approx_num_phrases: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approxNumPhrases') }})
    
