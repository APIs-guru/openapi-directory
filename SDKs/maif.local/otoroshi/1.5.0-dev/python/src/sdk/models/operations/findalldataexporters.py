from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllDataExportersSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllDataExportersRequest:
    security: FindAllDataExportersSecurity = field()
    

@dataclass
class FindAllDataExportersResponse:
    content_type: str = field()
    status_code: int = field()
    data_exporter_configs: Optional[List[shared.DataExporterConfig]] = field(default=None)
    
