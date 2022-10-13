from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindDataExporterConfigByIDPathParams:
    data_exporter_config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindDataExporterConfigByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindDataExporterConfigByIDRequest:
    path_params: FindDataExporterConfigByIDPathParams = field(default=None)
    security: FindDataExporterConfigByIDSecurity = field(default=None)
    

@dataclass
class FindDataExporterConfigByIDResponse:
    content_type: str = field(default=None)
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    status_code: int = field(default=None)
    
