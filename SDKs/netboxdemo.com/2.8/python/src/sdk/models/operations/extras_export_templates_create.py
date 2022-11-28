from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesCreateRequest:
    request: shared.WritableExportTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    
