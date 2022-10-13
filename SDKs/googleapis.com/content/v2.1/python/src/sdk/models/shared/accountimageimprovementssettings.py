from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountImageImprovementsSettings:
    allow_automatic_image_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAutomaticImageImprovements' }})
    
