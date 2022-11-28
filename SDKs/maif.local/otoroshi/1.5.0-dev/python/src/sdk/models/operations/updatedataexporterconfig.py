from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDataExporterConfigPathParams:
    data_exporter_config_id: str = field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDataExporterConfigRequest:
    path_params: UpdateDataExporterConfigPathParams = field()
    security: UpdateDataExporterConfigSecurity = field()
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    data_exporter_config: Optional[shared.DataExporterConfig] = field(default=None)
    
