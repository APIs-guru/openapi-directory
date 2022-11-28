from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2QuasiIDField:
    r"""GooglePrivacyDlpV2QuasiIDField
    A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
    """
    
    custom_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTag') }})
    field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
