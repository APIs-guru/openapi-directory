from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultMetadataOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultMetadataOptionsRequest:
    security: GetDefaultMetadataOptionsSecurity = field(default=None)
    

@dataclass
class GetDefaultMetadataOptionsResponse:
    content_type: str = field(default=None)
    metadata_options: Optional[shared.MetadataOptions] = field(default=None)
    status_code: int = field(default=None)
    
