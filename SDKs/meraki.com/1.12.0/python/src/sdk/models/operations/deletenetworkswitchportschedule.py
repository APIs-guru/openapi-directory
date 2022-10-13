from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchPortSchedulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchPortScheduleRequest:
    path_params: DeleteNetworkSwitchPortSchedulePathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchPortScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
