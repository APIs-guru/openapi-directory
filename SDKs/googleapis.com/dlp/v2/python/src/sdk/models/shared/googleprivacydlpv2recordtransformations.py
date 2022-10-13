from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldtransformation
from . import googleprivacydlpv2recordsuppression


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordTransformations:
    field_transformations: Optional[List[googleprivacydlpv2fieldtransformation.GooglePrivacyDlpV2FieldTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldTransformations' }})
    record_suppressions: Optional[List[googleprivacydlpv2recordsuppression.GooglePrivacyDlpV2RecordSuppression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordSuppressions' }})
    
