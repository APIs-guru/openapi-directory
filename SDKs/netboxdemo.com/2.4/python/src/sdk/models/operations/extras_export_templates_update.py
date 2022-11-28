from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesUpdateRequest:
    path_params: ExtrasExportTemplatesUpdatePathParams = field()
    request: shared.ExportTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    
