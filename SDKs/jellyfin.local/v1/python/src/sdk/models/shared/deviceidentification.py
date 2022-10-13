from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpheaderinfo


@dataclass_json
@dataclass
class DeviceIdentification:
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FriendlyName' }})
    headers: Optional[List[httpheaderinfo.HTTPHeaderInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Headers' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Manufacturer' }})
    manufacturer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManufacturerUrl' }})
    model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDescription' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelNumber' }})
    model_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelUrl' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }})
    
