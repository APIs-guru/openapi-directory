from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PersonalDetails:
    star_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starTime' }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred' }})
    
