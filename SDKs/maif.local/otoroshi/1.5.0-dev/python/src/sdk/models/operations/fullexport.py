from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FullExportSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FullExportRequest:
    security: FullExportSecurity = field()
    

@dataclass
class FullExportResponse:
    content_type: str = field()
    status_code: int = field()
    import_export: Optional[shared.ImportExport] = field(default=None)
    
