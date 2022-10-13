from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2hybridfindingdetails
from . import googleprivacydlpv2contentitem


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridContentItem:
    finding_details: Optional[googleprivacydlpv2hybridfindingdetails.GooglePrivacyDlpV2HybridFindingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingDetails' }})
    item: Optional[googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    
