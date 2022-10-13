from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBulkDataExporterConfigsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBulkDataExporterConfigsRequest:
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    security: CreateBulkDataExporterConfigsSecurity = field(default=None)
    
class CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED_AND_ONE = "201"


@dataclass_json
@dataclass
class CreateBulkDataExporterConfigs200ApplicationJSON:
    created: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CreateBulkDataExporterConfigsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_bulk_data_exporter_configs_200_application_json_objects: Optional[List[CreateBulkDataExporterConfigs200ApplicationJSON]] = field(default=None)
    
