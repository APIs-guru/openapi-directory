from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entity


@dataclass_json
@dataclass
class AnalyzeEntitySentimentResponse:
    entities: Optional[List[entity.Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    
