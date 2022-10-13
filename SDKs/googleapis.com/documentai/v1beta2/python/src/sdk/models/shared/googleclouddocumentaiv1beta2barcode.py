from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2Barcode:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    raw_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawValue' }})
    value_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFormat' }})
    
