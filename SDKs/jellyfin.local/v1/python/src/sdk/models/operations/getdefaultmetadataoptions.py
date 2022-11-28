from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultMetadataOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultMetadataOptionsRequest:
    security: GetDefaultMetadataOptionsSecurity = field()
    

@dataclass
class GetDefaultMetadataOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    metadata_options: Optional[shared.MetadataOptions] = field(default=None)
    
