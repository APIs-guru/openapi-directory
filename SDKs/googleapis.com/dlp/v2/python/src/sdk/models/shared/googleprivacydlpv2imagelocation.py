from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2boundingbox


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageLocation:
    bounding_boxes: Optional[List[googleprivacydlpv2boundingbox.GooglePrivacyDlpV2BoundingBox]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBoxes' }})
    
