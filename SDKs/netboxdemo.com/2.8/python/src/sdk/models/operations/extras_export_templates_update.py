from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesUpdateRequest:
    path_params: ExtrasExportTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableExportTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesUpdateResponse:
    content_type: str = field(default=None)
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    status_code: int = field(default=None)
    
