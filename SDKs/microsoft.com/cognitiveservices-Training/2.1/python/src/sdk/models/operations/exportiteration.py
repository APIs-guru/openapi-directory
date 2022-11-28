from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ExportIterationPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class ExportIterationFlavorEnum(str, Enum):
    LINUX = "Linux"
    WINDOWS = "Windows"

class ExportIterationPlatformEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"


@dataclass
class ExportIterationQueryParams:
    platform: ExportIterationPlatformEnum = field(metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    flavor: Optional[ExportIterationFlavorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportIterationHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportIterationRequest:
    headers: ExportIterationHeaders = field()
    path_params: ExportIterationPathParams = field()
    query_params: ExportIterationQueryParams = field()
    

@dataclass
class ExportIterationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    export: Optional[shared.Export] = field(default=None)
    
