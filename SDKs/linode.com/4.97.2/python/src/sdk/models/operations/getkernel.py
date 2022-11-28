from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetKernelPathParams:
    kernel_id: str = field(metadata={'path_param': { 'field_name': 'kernelId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetKernelDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetKernelRequest:
    path_params: GetKernelPathParams = field()
    

@dataclass
class GetKernelResponse:
    content_type: str = field()
    status_code: int = field()
    kernel: Optional[shared.Kernel] = field(default=None)
    get_kernel_default_application_json_object: Optional[GetKernelDefaultApplicationJSON] = field(default=None)
    
