from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsRequest:
    path_params: GetNetworkTrafficShapingDscpTaggingOptionsPathParams = field(default=None)
    

@dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_traffic_shaping_dscp_tagging_options_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
