from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCameraSensePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraSenseRequestBodyAudioDetection:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraSenseRequestBody:
    audio_detection: Optional[UpdateDeviceCameraSenseRequestBodyAudioDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioDetection' }})
    detection_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectionModelId' }})
    mqtt_broker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mqttBrokerId' }})
    sense_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senseEnabled' }})
    

@dataclass
class UpdateDeviceCameraSenseRequest:
    path_params: UpdateDeviceCameraSensePathParams = field(default=None)
    request: Optional[UpdateDeviceCameraSenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraSenseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_camera_sense_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
