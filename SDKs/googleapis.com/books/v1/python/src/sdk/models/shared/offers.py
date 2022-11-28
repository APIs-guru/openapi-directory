from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OffersItemsItems:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    canonical_volume_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalVolumeLink') }})
    cover_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverUrl') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    

@dataclass_json
@dataclass
class OffersItems:
    art_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artUrl') }})
    gservices_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gservicesKey') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    items: Optional[List[OffersItemsItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

@dataclass_json
@dataclass
class Offers:
    items: Optional[List[OffersItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
