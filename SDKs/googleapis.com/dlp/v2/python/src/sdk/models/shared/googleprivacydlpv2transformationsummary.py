from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationSummary:
    r"""GooglePrivacyDlpV2TransformationSummary
    Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
    """
    
    field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_transformations: Optional[List[GooglePrivacyDlpV2FieldTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTransformations') }})
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    record_suppress: Optional[GooglePrivacyDlpV2RecordSuppression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordSuppress') }})
    results: Optional[List[GooglePrivacyDlpV2SummaryResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    transformation: Optional[GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformation') }})
    transformed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformedBytes') }})
    
