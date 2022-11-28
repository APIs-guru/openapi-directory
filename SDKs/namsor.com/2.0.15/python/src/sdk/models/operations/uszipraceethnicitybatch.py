from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsZipRaceEthnicityBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsZipRaceEthnicityBatchRequest:
    security: UsZipRaceEthnicityBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameGeoZippedIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsZipRaceEthnicityBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_us_race_ethnicity_out: Optional[shared.BatchFirstLastNameUsRaceEthnicityOut] = field(default=None)
    
