from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeletebulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class DeletebulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class DeletebulkDataExporterConfig200ApplicationJSON:
    r"""DeletebulkDataExporterConfig200ApplicationJSON
    The bulk response
    """
    
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[DeletebulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class DeletebulkDataExporterConfigRequest:
    security: DeletebulkDataExporterConfigSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclass
class DeletebulkDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    deletebulk_data_exporter_config_200_application_json_objects: Optional[List[DeletebulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
