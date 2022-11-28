from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeTransformations:
    r"""GooglePrivacyDlpV2InfoTypeTransformations
    A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
    """
    
    transformations: Optional[List[GooglePrivacyDlpV2InfoTypeTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformations') }})
    
