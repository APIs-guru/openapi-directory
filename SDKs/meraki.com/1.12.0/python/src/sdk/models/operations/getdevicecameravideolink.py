from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetDeviceCameraVideoLinkPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraVideoLinkQueryParams:
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceCameraVideoLinkRequest:
    path_params: GetDeviceCameraVideoLinkPathParams = field()
    query_params: GetDeviceCameraVideoLinkQueryParams = field()
    

@dataclass
class GetDeviceCameraVideoLinkResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_video_link_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
