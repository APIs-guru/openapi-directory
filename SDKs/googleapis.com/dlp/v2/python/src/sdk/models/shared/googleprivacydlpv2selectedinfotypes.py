from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SelectedInfoTypes:
    r"""GooglePrivacyDlpV2SelectedInfoTypes
    Apply transformation to the selected info_types.
    """
    
    info_types: Optional[List[GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    
