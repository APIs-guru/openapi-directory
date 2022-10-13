from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeletebulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeletebulkDataExporterConfigRequest:
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    security: DeletebulkDataExporterConfigSecurity = field(default=None)
    
class DeletebulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class DeletebulkDataExporterConfig200ApplicationJSON:
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[DeletebulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class DeletebulkDataExporterConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deletebulk_data_exporter_config_200_application_json_objects: Optional[List[DeletebulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
