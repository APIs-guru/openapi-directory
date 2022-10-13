from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeTransformation:
    info_types: Optional[List[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    primitive_transformation: Optional[googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitiveTransformation' }})
    
