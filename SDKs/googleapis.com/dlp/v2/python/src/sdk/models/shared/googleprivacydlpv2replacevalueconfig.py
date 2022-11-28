from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ReplaceValueConfig:
    r"""GooglePrivacyDlpV2ReplaceValueConfig
    Replace each input value with a given `Value`.
    """
    
    new_value: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    
