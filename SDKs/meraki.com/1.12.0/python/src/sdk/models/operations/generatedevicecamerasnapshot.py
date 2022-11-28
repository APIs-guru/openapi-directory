from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GenerateDeviceCameraSnapshotPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GenerateDeviceCameraSnapshotRequestBody:
    fullframe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullframe') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class GenerateDeviceCameraSnapshotRequest:
    path_params: GenerateDeviceCameraSnapshotPathParams = field()
    request: Optional[GenerateDeviceCameraSnapshotRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDeviceCameraSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    generate_device_camera_snapshot_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
