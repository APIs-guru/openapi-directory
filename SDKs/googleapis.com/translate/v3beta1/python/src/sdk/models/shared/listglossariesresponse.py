from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import glossary


@dataclass_json
@dataclass
class ListGlossariesResponse:
    glossaries: Optional[List[glossary.Glossary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
