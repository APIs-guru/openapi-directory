from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createfooterresponse
from . import createfootnoteresponse
from . import createheaderresponse
from . import createnamedrangeresponse
from . import insertinlineimageresponse
from . import insertinlinesheetschartresponse
from . import replacealltextresponse


@dataclass_json
@dataclass
class Response:
    create_footer: Optional[createfooterresponse.CreateFooterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createFooter' }})
    create_footnote: Optional[createfootnoteresponse.CreateFootnoteResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createFootnote' }})
    create_header: Optional[createheaderresponse.CreateHeaderResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createHeader' }})
    create_named_range: Optional[createnamedrangeresponse.CreateNamedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createNamedRange' }})
    insert_inline_image: Optional[insertinlineimageresponse.InsertInlineImageResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertInlineImage' }})
    insert_inline_sheets_chart: Optional[insertinlinesheetschartresponse.InsertInlineSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertInlineSheetsChart' }})
    replace_all_text: Optional[replacealltextresponse.ReplaceAllTextResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllText' }})
    
