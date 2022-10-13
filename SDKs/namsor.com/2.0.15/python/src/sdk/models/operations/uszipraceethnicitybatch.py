from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsZipRaceEthnicityBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsZipRaceEthnicityBatchRequest:
    request: Optional[shared.BatchFirstLastNameGeoZippedIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsZipRaceEthnicityBatchSecurity = field(default=None)
    

@dataclass
class UsZipRaceEthnicityBatchResponse:
    batch_first_last_name_us_race_ethnicity_out: Optional[shared.BatchFirstLastNameUsRaceEthnicityOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
