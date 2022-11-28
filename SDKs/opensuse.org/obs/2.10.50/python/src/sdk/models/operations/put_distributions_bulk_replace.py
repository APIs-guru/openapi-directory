from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDistributionsBulkReplaceSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutDistributionsBulkReplaceRequest:
    security: PutDistributionsBulkReplaceSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PutDistributionsBulkReplaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
