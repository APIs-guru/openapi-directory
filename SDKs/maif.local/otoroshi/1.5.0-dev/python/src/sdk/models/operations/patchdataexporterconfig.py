from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchDataExporterConfigPathParams:
    data_exporter_config_id: str = field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchDataExporterConfigRequest:
    path_params: PatchDataExporterConfigPathParams = field()
    security: PatchDataExporterConfigSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    
