from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1StorageFormatCsvOptions:
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiter' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    header_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerRows' }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote' }})
    
