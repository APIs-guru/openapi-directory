from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeTransformation:
    r"""GooglePrivacyDlpV2InfoTypeTransformation
    A transformation to apply to text that is identified as a specific info_type.
    """
    
    info_types: Optional[List[GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    primitive_transformation: Optional[GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveTransformation') }})
    
