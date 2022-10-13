from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2contentitem
from . import googleprivacydlpv2transformationoverview


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ReidentifyContentResponse:
    item: Optional[googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    overview: Optional[googleprivacydlpv2transformationoverview.GooglePrivacyDlpV2TransformationOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    
