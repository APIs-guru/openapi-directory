from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DataExporterTemplateQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DataExporterTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DataExporterTemplateRequest:
    query_params: DataExporterTemplateQueryParams = field()
    security: DataExporterTemplateSecurity = field()
    

@dataclass
class DataExporterTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    
