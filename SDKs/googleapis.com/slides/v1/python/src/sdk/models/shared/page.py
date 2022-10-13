from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import layoutproperties
from . import masterproperties
from . import notesproperties
from . import pageelement
from . import pageproperties
from . import slideproperties

class PagePageTypeEnum(str, Enum):
    SLIDE = "SLIDE"
    MASTER = "MASTER"
    LAYOUT = "LAYOUT"
    NOTES = "NOTES"
    NOTES_MASTER = "NOTES_MASTER"


@dataclass_json
@dataclass
class Page:
    layout_properties: Optional[layoutproperties.LayoutProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutProperties' }})
    master_properties: Optional[masterproperties.MasterProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterProperties' }})
    notes_properties: Optional[notesproperties.NotesProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notesProperties' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    page_elements: Optional[List[pageelement.PageElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageElements' }})
    page_properties: Optional[pageproperties.PageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageProperties' }})
    page_type: Optional[PagePageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageType' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    slide_properties: Optional[slideproperties.SlideProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideProperties' }})
    
