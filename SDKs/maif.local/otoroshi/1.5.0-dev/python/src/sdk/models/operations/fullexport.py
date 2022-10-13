from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FullExportSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FullExportRequest:
    security: FullExportSecurity = field(default=None)
    

@dataclass
class FullExportResponse:
    content_type: str = field(default=None)
    import_export: Optional[shared.ImportExport] = field(default=None)
    status_code: int = field(default=None)
    
