from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GenerateDeviceCameraSnapshotPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GenerateDeviceCameraSnapshotRequestBody:
    fullframe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullframe' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class GenerateDeviceCameraSnapshotRequest:
    path_params: GenerateDeviceCameraSnapshotPathParams = field(default=None)
    request: Optional[GenerateDeviceCameraSnapshotRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDeviceCameraSnapshotResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    generate_device_camera_snapshot_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
