from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDataExporterConfigPathParams:
    data_exporter_config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDataExporterConfigRequest:
    path_params: DeleteDataExporterConfigPathParams = field(default=None)
    security: DeleteDataExporterConfigSecurity = field(default=None)
    

@dataclass
class DeleteDataExporterConfigResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
