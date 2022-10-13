from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import phraseset


@dataclass_json
@dataclass
class CreatePhraseSetRequest:
    phrase_set: Optional[phraseset.PhraseSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseSet' }})
    phrase_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseSetId' }})
    
