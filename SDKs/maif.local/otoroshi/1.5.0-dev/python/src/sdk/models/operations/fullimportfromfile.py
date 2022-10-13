from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FullImportFromFileSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FullImportFromFileRequest:
    request: Optional[shared.ImportExport] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FullImportFromFileSecurity = field(default=None)
    

@dataclass
class FullImportFromFileResponse:
    content_type: str = field(default=None)
    done: Optional[shared.Done] = field(default=None)
    status_code: int = field(default=None)
    
