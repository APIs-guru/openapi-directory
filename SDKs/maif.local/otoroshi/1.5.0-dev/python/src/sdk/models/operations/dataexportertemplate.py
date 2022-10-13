from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DataExporterTemplateQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DataExporterTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DataExporterTemplateRequest:
    query_params: DataExporterTemplateQueryParams = field(default=None)
    security: DataExporterTemplateSecurity = field(default=None)
    

@dataclass
class DataExporterTemplateResponse:
    content_type: str = field(default=None)
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    status_code: int = field(default=None)
    
