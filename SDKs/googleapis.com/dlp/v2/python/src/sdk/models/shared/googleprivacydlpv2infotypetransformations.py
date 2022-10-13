from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotypetransformation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeTransformations:
    transformations: Optional[List[googleprivacydlpv2infotypetransformation.GooglePrivacyDlpV2InfoTypeTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformations' }})
    
