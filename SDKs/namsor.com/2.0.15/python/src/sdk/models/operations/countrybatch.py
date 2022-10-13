from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CountryBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CountryBatchRequest:
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CountryBatchSecurity = field(default=None)
    

@dataclass
class CountryBatchResponse:
    batch_personal_name_geo_out: Optional[shared.BatchPersonalNameGeoOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
