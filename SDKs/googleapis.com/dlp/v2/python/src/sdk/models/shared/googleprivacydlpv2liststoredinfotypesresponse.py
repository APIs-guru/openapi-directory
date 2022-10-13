from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2storedinfotype


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListStoredInfoTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    stored_info_types: Optional[List[googleprivacydlpv2storedinfotype.GooglePrivacyDlpV2StoredInfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storedInfoTypes' }})
    
