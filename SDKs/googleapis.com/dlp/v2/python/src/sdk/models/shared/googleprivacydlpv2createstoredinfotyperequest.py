from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2storedinfotypeconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateStoredInfoTypeRequest:
    config: Optional[googleprivacydlpv2storedinfotypeconfig.GooglePrivacyDlpV2StoredInfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    stored_info_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storedInfoTypeId' }})
    
