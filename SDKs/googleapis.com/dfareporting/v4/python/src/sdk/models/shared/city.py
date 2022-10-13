from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class City:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    country_dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryDartId' }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metro_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metroCode' }})
    metro_dma_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metroDmaId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    region_dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionDartId' }})
    
