from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FullImportSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FullImportRequest:
    request: Optional[shared.ImportExport] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FullImportSecurity = field(default=None)
    

@dataclass
class FullImportResponse:
    content_type: str = field(default=None)
    done: Optional[shared.Done] = field(default=None)
    status_code: int = field(default=None)
    
