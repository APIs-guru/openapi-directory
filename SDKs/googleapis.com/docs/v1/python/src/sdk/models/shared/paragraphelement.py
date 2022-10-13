from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autotext
from . import columnbreak
from . import equation
from . import footnotereference
from . import horizontalrule
from . import inlineobjectelement
from . import pagebreak
from . import person
from . import richlink
from . import textrun


@dataclass_json
@dataclass
class ParagraphElement:
    auto_text: Optional[autotext.AutoText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoText' }})
    column_break: Optional[columnbreak.ColumnBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnBreak' }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    equation: Optional[equation.Equation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equation' }})
    footnote_reference: Optional[footnotereference.FootnoteReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footnoteReference' }})
    horizontal_rule: Optional[horizontalrule.HorizontalRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalRule' }})
    inline_object_element: Optional[inlineobjectelement.InlineObjectElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineObjectElement' }})
    page_break: Optional[pagebreak.PageBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageBreak' }})
    person: Optional[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    rich_link: Optional[richlink.RichLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'richLink' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    text_run: Optional[textrun.TextRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRun' }})
    
