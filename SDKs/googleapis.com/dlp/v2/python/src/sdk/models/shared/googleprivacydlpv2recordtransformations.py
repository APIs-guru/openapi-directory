from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordTransformations:
    r"""GooglePrivacyDlpV2RecordTransformations
    A type of transformation that is applied over structured data such as a table.
    """
    
    field_transformations: Optional[List[GooglePrivacyDlpV2FieldTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTransformations') }})
    record_suppressions: Optional[List[GooglePrivacyDlpV2RecordSuppression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordSuppressions') }})
    
