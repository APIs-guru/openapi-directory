from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateBulkDataExporterConfigRequest:
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    security: UpdateBulkDataExporterConfigSecurity = field(default=None)
    
class UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class UpdateBulkDataExporterConfig200ApplicationJSON:
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass
class UpdateBulkDataExporterConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_bulk_data_exporter_config_200_application_json_objects: Optional[List[UpdateBulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
