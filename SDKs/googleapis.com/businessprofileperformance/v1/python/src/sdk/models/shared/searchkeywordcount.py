from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import insightsvalue


@dataclass_json
@dataclass
class SearchKeywordCount:
    insights_value: Optional[insightsvalue.InsightsValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insightsValue' }})
    search_keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchKeyword' }})
    
