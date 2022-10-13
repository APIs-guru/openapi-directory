from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesCreateRequest:
    request: shared.ExportTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesCreateResponse:
    content_type: str = field(default=None)
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    status_code: int = field(default=None)
    
