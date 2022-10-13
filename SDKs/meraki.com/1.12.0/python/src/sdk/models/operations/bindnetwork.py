from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class BindNetworkPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BindNetworkRequestBody:
    auto_bind: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoBind' }})
    config_template_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configTemplateId' }})
    

@dataclass
class BindNetworkRequest:
    path_params: BindNetworkPathParams = field(default=None)
    request: BindNetworkRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BindNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bind_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
