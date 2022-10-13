from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErskineMayParagraphSearchResult:
    chapter_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chapterNumber' }})
    chapter_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chapterTitle' }})
    paragraph_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphReference' }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partNumber' }})
    search_result_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchResultText' }})
    section_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionId' }})
    section_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionTitle' }})
    section_title_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionTitleChain' }})
    
