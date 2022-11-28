from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchPortSchedulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = field(metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchPortScheduleRequest:
    path_params: DeleteNetworkSwitchPortSchedulePathParams = field()
    

@dataclass
class DeleteNetworkSwitchPortScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    
