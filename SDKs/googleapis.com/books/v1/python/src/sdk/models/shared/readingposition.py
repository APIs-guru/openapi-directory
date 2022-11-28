from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReadingPosition:
    epub_cfi_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epubCfiPosition') }})
    gb_image_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbImagePosition') }})
    gb_text_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbTextPosition') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pdf_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfPosition') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
