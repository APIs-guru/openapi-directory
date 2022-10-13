from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bytecontentitem
from . import googleprivacydlpv2table


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ContentItem:
    byte_item: Optional[googleprivacydlpv2bytecontentitem.GooglePrivacyDlpV2ByteContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteItem' }})
    table: Optional[googleprivacydlpv2table.GooglePrivacyDlpV2Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
