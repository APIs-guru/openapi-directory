from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetOrganizationDevicesUplinksLossAndLatencyPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"
    CELLULAR = "cellular"


@dataclass
class GetOrganizationDevicesUplinksLossAndLatencyQueryParams:
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    uplink: Optional[GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum] = field(default=None, metadata={'query_param': { 'field_name': 'uplink', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationDevicesUplinksLossAndLatencyRequest:
    path_params: GetOrganizationDevicesUplinksLossAndLatencyPathParams = field(default=None)
    query_params: GetOrganizationDevicesUplinksLossAndLatencyQueryParams = field(default=None)
    

@dataclass
class GetOrganizationDevicesUplinksLossAndLatencyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_devices_uplinks_loss_and_latency_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
