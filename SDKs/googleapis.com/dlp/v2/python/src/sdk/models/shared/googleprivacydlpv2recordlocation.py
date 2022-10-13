from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2recordkey
from . import googleprivacydlpv2tablelocation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordLocation:
    field_id: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    record_key: Optional[googleprivacydlpv2recordkey.GooglePrivacyDlpV2RecordKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordKey' }})
    table_location: Optional[googleprivacydlpv2tablelocation.GooglePrivacyDlpV2TableLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableLocation' }})
    
