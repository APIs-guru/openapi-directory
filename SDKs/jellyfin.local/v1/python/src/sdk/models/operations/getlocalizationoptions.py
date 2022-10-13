from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLocalizationOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLocalizationOptionsRequest:
    security: GetLocalizationOptionsSecurity = field(default=None)
    

@dataclass
class GetLocalizationOptionsResponse:
    content_type: str = field(default=None)
    localization_options: Optional[List[shared.LocalizationOption]] = field(default=None)
    status_code: int = field(default=None)
    
