from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFileHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFileRequest:
    path_params: GetInstancesIDFilePathParams = field(default=None)
    headers: GetInstancesIDFileHeaders = field(default=None)
    

@dataclass
class GetInstancesIDFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_instances_id_file_200_application_dicom_plus_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
