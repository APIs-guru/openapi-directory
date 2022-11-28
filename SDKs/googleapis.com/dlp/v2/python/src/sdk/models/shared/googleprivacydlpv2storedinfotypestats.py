from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeStats:
    r"""GooglePrivacyDlpV2StoredInfoTypeStats
    Statistics for a StoredInfoType.
    """
    
    large_custom_dictionary: Optional[GooglePrivacyDlpV2LargeCustomDictionaryStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeCustomDictionary') }})
    
