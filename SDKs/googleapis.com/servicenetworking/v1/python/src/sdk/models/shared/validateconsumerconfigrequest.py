from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import consumerproject
from . import rangereservation


@dataclass_json
@dataclass
class ValidateConsumerConfigRequest:
    check_service_networking_use_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkServiceNetworkingUsePermission' }})
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    consumer_project: Optional[consumerproject.ConsumerProject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerProject' }})
    range_reservation: Optional[rangereservation.RangeReservation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeReservation' }})
    validate_network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateNetwork' }})
    
