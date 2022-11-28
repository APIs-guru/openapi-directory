from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ReplaceDictionaryConfig:
    r"""GooglePrivacyDlpV2ReplaceDictionaryConfig
    Replace each input value with a value randomly selected from the dictionary.
    """
    
    word_list: Optional[GooglePrivacyDlpV2WordList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordList') }})
    
