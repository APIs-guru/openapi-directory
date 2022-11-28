from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageTransformations:
    r"""GooglePrivacyDlpV2ImageTransformations
    A type of transformation that is applied over images.
    """
    
    transforms: Optional[List[GooglePrivacyDlpV2ImageTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transforms') }})
    
