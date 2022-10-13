from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4RiceDeltaEncoding:
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedData' }})
    first_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstValue' }})
    num_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numEntries' }})
    rice_parameter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceParameter' }})
    
