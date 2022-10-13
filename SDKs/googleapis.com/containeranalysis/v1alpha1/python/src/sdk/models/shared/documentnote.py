from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocumentNote:
    data_licence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLicence' }})
    spdx_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxVersion' }})
    
