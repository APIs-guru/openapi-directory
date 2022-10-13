from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rendererformattedstrings


@dataclass_json
@dataclass
class I18n:
    renderer_formatted_strings: Optional[rendererformattedstrings.RendererFormattedStrings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rendererFormattedStrings' }})
    
