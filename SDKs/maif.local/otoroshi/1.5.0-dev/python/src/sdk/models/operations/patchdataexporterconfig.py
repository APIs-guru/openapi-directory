from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchDataExporterConfigPathParams:
    data_exporter_config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchDataExporterConfigRequest:
    path_params: PatchDataExporterConfigPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchDataExporterConfigSecurity = field(default=None)
    

@dataclass
class PatchDataExporterConfigResponse:
    content_type: str = field(default=None)
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    status_code: int = field(default=None)
    
