from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErskineMaySectionDetail:
    chapter_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapterNumber') }})
    chapter_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapterTitle') }})
    content_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHtml') }})
    footnotes: Optional[List[ErskineMayFootnote]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnotes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parent_section_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSectionId') }})
    parent_section_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSectionTitle') }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partNumber') }})
    part_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partTitle') }})
    sub_sections: Optional[List[ErskineMaySectionOverview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subSections') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleChain') }})
    
