from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDataExporterConfigPathParams:
    data_exporter_config_id: str = field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDataExporterConfigRequest:
    path_params: DeleteDataExporterConfigPathParams = field()
    security: DeleteDataExporterConfigSecurity = field()
    

@dataclass
class DeleteDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
