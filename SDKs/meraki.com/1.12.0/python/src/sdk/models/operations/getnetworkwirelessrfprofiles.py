from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessRfProfilesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessRfProfilesQueryParams:
    include_template_profiles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeTemplateProfiles', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessRfProfilesRequest:
    path_params: GetNetworkWirelessRfProfilesPathParams = field(default=None)
    query_params: GetNetworkWirelessRfProfilesQueryParams = field(default=None)
    

@dataclass
class GetNetworkWirelessRfProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_rf_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
