from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDataExporterConfigRequest:
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDataExporterConfigSecurity = field(default=None)
    

@dataclass
class CreateDataExporterConfigResponse:
    content_type: str = field(default=None)
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    status_code: int = field(default=None)
    
