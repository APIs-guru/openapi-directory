from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2recordcondition
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2infotypetransformations
from . import googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FieldTransformation:
    condition: Optional[googleprivacydlpv2recordcondition.GooglePrivacyDlpV2RecordCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    fields: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    info_type_transformations: Optional[googleprivacydlpv2infotypetransformations.GooglePrivacyDlpV2InfoTypeTransformations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypeTransformations' }})
    primitive_transformation: Optional[googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitiveTransformation' }})
    
