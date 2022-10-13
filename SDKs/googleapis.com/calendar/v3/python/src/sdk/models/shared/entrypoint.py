from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntryPoint:
    access_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessCode' }})
    entry_point_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointFeatures' }})
    entry_point_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointType' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    meeting_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meetingCode' }})
    passcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passcode' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
