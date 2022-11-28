from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class BindNetworkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BindNetworkRequestBody:
    config_template_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configTemplateId') }})
    auto_bind: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBind') }})
    

@dataclass
class BindNetworkRequest:
    path_params: BindNetworkPathParams = field()
    request: BindNetworkRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BindNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    bind_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
