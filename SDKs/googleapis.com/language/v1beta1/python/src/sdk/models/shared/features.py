from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Features:
    extract_document_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractDocumentSentiment' }})
    extract_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractEntities' }})
    extract_syntax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractSyntax' }})
    
