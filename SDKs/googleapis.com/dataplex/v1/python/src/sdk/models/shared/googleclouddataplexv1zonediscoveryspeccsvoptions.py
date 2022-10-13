from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions:
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiter' }})
    disable_type_inference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTypeInference' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    header_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerRows' }})
    
