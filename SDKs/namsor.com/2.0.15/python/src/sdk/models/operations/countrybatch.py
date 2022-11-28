from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CountryBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CountryBatchRequest:
    security: CountryBatchSecurity = field()
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CountryBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_personal_name_geo_out: Optional[shared.BatchPersonalNameGeoOut] = field(default=None)
    
