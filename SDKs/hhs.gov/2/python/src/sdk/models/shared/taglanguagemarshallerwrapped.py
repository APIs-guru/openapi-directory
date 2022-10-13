from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meta
from . import taglanguagemarshaller


@dataclass_json
@dataclass
class TagLanguageMarshallerWrapped:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[taglanguagemarshaller.TagLanguageMarshaller]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
