from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReadingPosition:
    epub_cfi_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epubCfiPosition' }})
    gb_image_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbImagePosition' }})
    gb_text_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbTextPosition' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pdf_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdfPosition' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
