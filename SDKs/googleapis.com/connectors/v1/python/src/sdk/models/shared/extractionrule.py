from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source


@dataclass_json
@dataclass
class ExtractionRule:
    extraction_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractionRegex' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
