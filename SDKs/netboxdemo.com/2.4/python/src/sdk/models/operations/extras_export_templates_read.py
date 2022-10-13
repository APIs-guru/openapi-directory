from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesReadRequest:
    path_params: ExtrasExportTemplatesReadPathParams = field(default=None)
    

@dataclass
class ExtrasExportTemplatesReadResponse:
    content_type: str = field(default=None)
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    status_code: int = field(default=None)
    
