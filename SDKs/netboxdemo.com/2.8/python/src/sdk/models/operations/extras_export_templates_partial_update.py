from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesPartialUpdateRequest:
    path_params: ExtrasExportTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableExportTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesPartialUpdateResponse:
    content_type: str = field(default=None)
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    status_code: int = field(default=None)
    
