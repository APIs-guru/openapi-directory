from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2range
from . import googleprivacydlpv2range
from . import googleprivacydlpv2container
from . import googleprivacydlpv2contentlocation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Location:
    byte_range: Optional[googleprivacydlpv2range.GooglePrivacyDlpV2Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteRange' }})
    codepoint_range: Optional[googleprivacydlpv2range.GooglePrivacyDlpV2Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codepointRange' }})
    container: Optional[googleprivacydlpv2container.GooglePrivacyDlpV2Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    content_locations: Optional[List[googleprivacydlpv2contentlocation.GooglePrivacyDlpV2ContentLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLocations' }})
    
