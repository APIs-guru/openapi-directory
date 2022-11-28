from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FullImportFromFileSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FullImportFromFileRequest:
    security: FullImportFromFileSecurity = field()
    request: Optional[shared.ImportExport] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FullImportFromFileResponse:
    content_type: str = field()
    status_code: int = field()
    done: Optional[shared.Done] = field(default=None)
    
