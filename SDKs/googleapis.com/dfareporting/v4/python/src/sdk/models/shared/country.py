from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Country:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ssl_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslEnabled' }})
    
