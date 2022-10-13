from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDataExporterConfigPathParams:
    data_exporter_config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDataExporterConfigRequest:
    path_params: UpdateDataExporterConfigPathParams = field(default=None)
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDataExporterConfigSecurity = field(default=None)
    

@dataclass
class UpdateDataExporterConfigResponse:
    content_type: str = field(default=None)
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    status_code: int = field(default=None)
    
