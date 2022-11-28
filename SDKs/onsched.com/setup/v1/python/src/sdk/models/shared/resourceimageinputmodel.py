from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceImageInputModel:
    image_file_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageFileData') }})
    image_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageFileName') }})
    
