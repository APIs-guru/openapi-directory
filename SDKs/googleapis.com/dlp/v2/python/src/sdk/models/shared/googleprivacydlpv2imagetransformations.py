from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2imagetransformation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageTransformations:
    transforms: Optional[List[googleprivacydlpv2imagetransformation.GooglePrivacyDlpV2ImageTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transforms' }})
    
