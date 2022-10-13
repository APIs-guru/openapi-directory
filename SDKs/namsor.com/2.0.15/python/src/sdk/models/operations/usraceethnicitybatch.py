from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsRaceEthnicityBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsRaceEthnicityBatchRequest:
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsRaceEthnicityBatchSecurity = field(default=None)
    

@dataclass
class UsRaceEthnicityBatchResponse:
    batch_first_last_name_us_race_ethnicity_out: Optional[shared.BatchFirstLastNameUsRaceEthnicityOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
