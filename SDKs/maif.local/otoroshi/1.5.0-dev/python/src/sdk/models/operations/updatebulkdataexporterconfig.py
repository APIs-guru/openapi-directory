from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class UpdateBulkDataExporterConfig200ApplicationJSON:
    r"""UpdateBulkDataExporterConfig200ApplicationJSON
    The bulk response
    """
    
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass
class UpdateBulkDataExporterConfigRequest:
    security: UpdateBulkDataExporterConfigSecurity = field()
    request: Optional[shared.DataExporterConfig] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclass
class UpdateBulkDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    update_bulk_data_exporter_config_200_application_json_objects: Optional[List[UpdateBulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
