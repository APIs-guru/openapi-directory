from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ExcludeInfoTypes:
    r"""GooglePrivacyDlpV2ExcludeInfoTypes
    List of excluded infoTypes.
    """
    
    info_types: Optional[List[GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    
