from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell:
    r"""GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell
    A cell representation inside the table.
    """
    
    col_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colSpan') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    layout: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowSpan') }})
    
