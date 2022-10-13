from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedcable
from . import nesteddevice

class ConsoleServerPortConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class ConsoleServerPortConnectionStatusConnectionStatus:
    label: ConsoleServerPortConnectionStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class ConsoleServerPortTypeLabelEnum(str, Enum):
    DE_9 = "DE-9"
    DB_25 = "DB-25"
    RJ_11 = "RJ-11"
    RJ_12 = "RJ-12"
    RJ_45 = "RJ-45"
    USB_TYPE_A = "USB Type A"
    USB_TYPE_B = "USB Type B"
    USB_TYPE_C = "USB Type C"
    USB_MINI_A = "USB Mini A"
    USB_MINI_B = "USB Mini B"
    USB_MICRO_A = "USB Micro A"
    USB_MICRO_B = "USB Micro B"
    OTHER = "Other"

class ConsoleServerPortTypeValueEnum(str, Enum):
    DE_9 = "de-9"
    DB_25 = "db-25"
    RJ_11 = "rj-11"
    RJ_12 = "rj-12"
    RJ_45 = "rj-45"
    USB_A = "usb-a"
    USB_B = "usb-b"
    USB_C = "usb-c"
    USB_MINI_A = "usb-mini-a"
    USB_MINI_B = "usb-mini-b"
    USB_MICRO_A = "usb-micro-a"
    USB_MICRO_B = "usb-micro-b"
    OTHER = "other"


@dataclass_json
@dataclass
class ConsoleServerPortTypeType:
    label: ConsoleServerPortTypeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: ConsoleServerPortTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ConsoleServerPort:
    cable: Optional[nestedcable.NestedCable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint' }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint_type' }})
    connection_status: Optional[ConsoleServerPortConnectionStatusConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[ConsoleServerPortTypeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
