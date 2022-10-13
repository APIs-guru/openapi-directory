from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypecolor
from . import googletypecolor
from . import googleclouddocumentaiv1beta3documentstylefontsize
from . import googleclouddocumentaiv1beta3documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentStyle:
    background_color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontFamily' }})
    font_size: Optional[googleclouddocumentaiv1beta3documentstylefontsize.GoogleCloudDocumentaiV1beta3DocumentStyleFontSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontSize' }})
    font_weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontWeight' }})
    text_anchor: Optional[googleclouddocumentaiv1beta3documenttextanchor.GoogleCloudDocumentaiV1beta3DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    text_decoration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDecoration' }})
    text_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    
