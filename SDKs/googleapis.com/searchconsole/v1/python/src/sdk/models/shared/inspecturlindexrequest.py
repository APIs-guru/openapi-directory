from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InspectURLIndexRequest:
    inspection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectionUrl' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteUrl' }})
    
