from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CriticMultimediaResource:
    credit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credit') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class CriticMultimedia:
    resource: Optional[CriticMultimediaResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class Critic:
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    multimedia: Optional[CriticMultimedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multimedia') }})
    seo_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seo_name') }})
    sort_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_name') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
