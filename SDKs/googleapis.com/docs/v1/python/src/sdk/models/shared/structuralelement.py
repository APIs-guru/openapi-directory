from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructuralElementInput:
    r"""StructuralElementInput
    A StructuralElement describes content that provides structure to the document.
    """
    
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    paragraph: Optional[ParagraphInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraph') }})
    section_break: Optional[SectionBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionBreak') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    table: Optional[Table] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    table_of_contents: Optional[TableOfContents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOfContents') }})
    

@dataclass_json
@dataclass
class StructuralElement:
    r"""StructuralElement
    A StructuralElement describes content that provides structure to the document.
    """
    
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    paragraph: Optional[Paragraph] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraph') }})
    section_break: Optional[SectionBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionBreak') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    table: Optional[Table] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    table_of_contents: Optional[TableOfContents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOfContents') }})
    
