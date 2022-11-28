from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateBulkDataExporterConfigsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED_AND_ONE = "201"


@dataclass_json
@dataclass
class CreateBulkDataExporterConfigs200ApplicationJSON:
    r"""CreateBulkDataExporterConfigs200ApplicationJSON
    The bulk response
    """
    
    created: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class CreateBulkDataExporterConfigsRequest:
    security: CreateBulkDataExporterConfigsSecurity = field()
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclass
class CreateBulkDataExporterConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    create_bulk_data_exporter_configs_200_application_json_objects: Optional[List[CreateBulkDataExporterConfigs200ApplicationJSON]] = field(default=None)
    
