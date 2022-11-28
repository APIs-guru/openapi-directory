from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Presentation:
    r"""Presentation
    A Google Slides presentation.
    """
    
    layouts: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layouts') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    masters: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masters') }})
    notes_master: Optional[Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notesMaster') }})
    page_size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    presentation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentationId') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    slides: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slides') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
