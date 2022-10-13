from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchDscpToCosMappingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings:
    cos: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cos' }})
    dscp: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscp' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBody:
    mappings: List[UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappings' }})
    

@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequest:
    path_params: UpdateNetworkSwitchDscpToCosMappingsPathParams = field(default=None)
    request: UpdateNetworkSwitchDscpToCosMappingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchDscpToCosMappingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_dscp_to_cos_mappings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
