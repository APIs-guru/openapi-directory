from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetKernelPathParams:
    kernel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'kernelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKernelRequest:
    path_params: GetKernelPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetKernelDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetKernelResponse:
    content_type: str = field(default=None)
    kernel: Optional[shared.Kernel] = field(default=None)
    status_code: int = field(default=None)
    get_kernel_default_application_json_object: Optional[GetKernelDefaultApplicationJSON] = field(default=None)
    
