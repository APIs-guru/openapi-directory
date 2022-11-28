from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Response:
    r"""Response
    A single response from an update.
    """
    
    create_footer: Optional[CreateFooterResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createFooter') }})
    create_footnote: Optional[CreateFootnoteResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createFootnote') }})
    create_header: Optional[CreateHeaderResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createHeader') }})
    create_named_range: Optional[CreateNamedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createNamedRange') }})
    insert_inline_image: Optional[InsertInlineImageResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertInlineImage') }})
    insert_inline_sheets_chart: Optional[InsertInlineSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertInlineSheetsChart') }})
    replace_all_text: Optional[ReplaceAllTextResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllText') }})
    
