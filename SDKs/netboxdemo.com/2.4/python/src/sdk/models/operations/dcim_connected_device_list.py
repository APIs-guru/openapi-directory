from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConnectedDeviceListQueryParams:
    peer_device: str = field(metadata={'query_param': { 'field_name': 'peer_device', 'style': 'form', 'explode': True }})
    peer_interface: str = field(metadata={'query_param': { 'field_name': 'peer_interface', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimConnectedDeviceListRequest:
    query_params: DcimConnectedDeviceListQueryParams = field()
    

@dataclass
class DcimConnectedDeviceListResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    
