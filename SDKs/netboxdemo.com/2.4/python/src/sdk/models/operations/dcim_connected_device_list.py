from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DcimConnectedDeviceListQueryParams:
    peer_device: str = field(default=None, metadata={'query_param': { 'field_name': 'peer_device', 'style': 'form', 'explode': True }})
    peer_interface: str = field(default=None, metadata={'query_param': { 'field_name': 'peer_interface', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimConnectedDeviceListRequest:
    query_params: DcimConnectedDeviceListQueryParams = field(default=None)
    

@dataclass
class DcimConnectedDeviceListResponse:
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
