from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paragraph
from . import sectionbreak
from . import table
from . import tableofcontents


@dataclass_json
@dataclass
class StructuralElement:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    paragraph: Optional[paragraph.Paragraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraph' }})
    section_break: Optional[sectionbreak.SectionBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionBreak' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    table: Optional[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    table_of_contents: Optional[tableofcontents.TableOfContents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableOfContents' }})
    
