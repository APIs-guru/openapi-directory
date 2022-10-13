from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TableSpec:
    grouped_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupedEntry' }})
    
