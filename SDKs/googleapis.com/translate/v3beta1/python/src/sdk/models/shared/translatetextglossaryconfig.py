from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslateTextGlossaryConfig:
    glossary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossary' }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreCase' }})
    
