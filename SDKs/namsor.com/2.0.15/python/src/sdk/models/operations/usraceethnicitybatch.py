from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsRaceEthnicityBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsRaceEthnicityBatchRequest:
    security: UsRaceEthnicityBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsRaceEthnicityBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_us_race_ethnicity_out: Optional[shared.BatchFirstLastNameUsRaceEthnicityOut] = field(default=None)
    
