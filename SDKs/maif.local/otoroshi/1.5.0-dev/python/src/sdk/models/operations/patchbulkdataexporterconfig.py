from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PatchBulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchBulkDataExporterConfigRequest:
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    security: PatchBulkDataExporterConfigSecurity = field(default=None)
    
class PatchBulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class PatchBulkDataExporterConfig200ApplicationJSON:
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[PatchBulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass
class PatchBulkDataExporterConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    patch_bulk_data_exporter_config_200_application_json_objects: Optional[List[PatchBulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
