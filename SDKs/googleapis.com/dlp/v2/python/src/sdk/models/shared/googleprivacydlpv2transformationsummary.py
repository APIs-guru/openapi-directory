from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2fieldtransformation
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2recordsuppression
from . import googleprivacydlpv2summaryresult
from . import googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationSummary:
    field: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_transformations: Optional[List[googleprivacydlpv2fieldtransformation.GooglePrivacyDlpV2FieldTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldTransformations' }})
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    record_suppress: Optional[googleprivacydlpv2recordsuppression.GooglePrivacyDlpV2RecordSuppression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordSuppress' }})
    results: Optional[List[googleprivacydlpv2summaryresult.GooglePrivacyDlpV2SummaryResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    transformation: Optional[googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformation' }})
    transformed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformedBytes' }})
    
