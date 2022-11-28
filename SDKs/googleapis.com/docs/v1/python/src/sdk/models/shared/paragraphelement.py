from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParagraphElementInput:
    r"""ParagraphElementInput
    A ParagraphElement describes content within a Paragraph.
    """
    
    auto_text: Optional[AutoText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoText') }})
    column_break: Optional[ColumnBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnBreak') }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    equation: Optional[Equation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equation') }})
    footnote_reference: Optional[FootnoteReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnoteReference') }})
    horizontal_rule: Optional[HorizontalRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalRule') }})
    inline_object_element: Optional[InlineObjectElement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjectElement') }})
    page_break: Optional[PageBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreak') }})
    person: Optional[PersonInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    rich_link: Optional[RichLinkInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richLink') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    text_run: Optional[TextRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRun') }})
    

@dataclass_json
@dataclass
class ParagraphElement:
    r"""ParagraphElement
    A ParagraphElement describes content within a Paragraph.
    """
    
    auto_text: Optional[AutoText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoText') }})
    column_break: Optional[ColumnBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnBreak') }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    equation: Optional[Equation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equation') }})
    footnote_reference: Optional[FootnoteReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnoteReference') }})
    horizontal_rule: Optional[HorizontalRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalRule') }})
    inline_object_element: Optional[InlineObjectElement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjectElement') }})
    page_break: Optional[PageBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreak') }})
    person: Optional[Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    rich_link: Optional[RichLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richLink') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    text_run: Optional[TextRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRun') }})
    
