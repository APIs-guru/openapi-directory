from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErskineMaySectionSearchResult:
    chapter_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapterNumber') }})
    chapter_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapterTitle') }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partNumber') }})
    section_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionId') }})
    section_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionTitle') }})
    section_title_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionTitleChain') }})
    
