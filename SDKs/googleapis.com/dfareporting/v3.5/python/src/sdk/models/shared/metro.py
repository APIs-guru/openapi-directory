from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Metro:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    country_dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryDartId' }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartId' }})
    dma_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dmaId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metro_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metroCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
