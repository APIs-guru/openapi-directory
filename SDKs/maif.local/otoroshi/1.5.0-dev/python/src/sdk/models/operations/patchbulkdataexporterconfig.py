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
class PatchBulkDataExporterConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class PatchBulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclass
class PatchBulkDataExporterConfig200ApplicationJSON:
    r"""PatchBulkDataExporterConfig200ApplicationJSON
    The bulk response
    """
    
    id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PatchBulkDataExporterConfig200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass
class PatchBulkDataExporterConfigRequest:
    security: PatchBulkDataExporterConfigSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclass
class PatchBulkDataExporterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    patch_bulk_data_exporter_config_200_application_json_objects: Optional[List[PatchBulkDataExporterConfig200ApplicationJSON]] = field(default=None)
    
