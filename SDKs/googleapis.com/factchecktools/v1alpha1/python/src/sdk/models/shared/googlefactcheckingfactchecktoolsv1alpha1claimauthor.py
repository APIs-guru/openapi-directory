from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTitle' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    same_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sameAs' }})
    
