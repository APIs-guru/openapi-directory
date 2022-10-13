from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import page
from . import page
from . import page
from . import size
from . import page


@dataclass_json
@dataclass
class Presentation:
    layouts: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layouts' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    masters: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masters' }})
    notes_master: Optional[page.Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notesMaster' }})
    page_size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    presentation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentationId' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    slides: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slides' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
