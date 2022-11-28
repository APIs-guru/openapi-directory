from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Row:
    r"""GooglePrivacyDlpV2Row
    Values of the row.
    """
    
    values: Optional[List[GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
