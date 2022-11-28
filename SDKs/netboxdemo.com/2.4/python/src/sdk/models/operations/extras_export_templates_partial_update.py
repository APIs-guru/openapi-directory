from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasExportTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesPartialUpdateRequest:
    path_params: ExtrasExportTemplatesPartialUpdatePathParams = field()
    request: shared.ExportTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasExportTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    export_template: Optional[shared.ExportTemplate] = field(default=None)
    
