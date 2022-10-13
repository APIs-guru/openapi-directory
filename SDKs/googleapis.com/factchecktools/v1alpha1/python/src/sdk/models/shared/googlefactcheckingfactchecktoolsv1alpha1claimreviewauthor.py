from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
