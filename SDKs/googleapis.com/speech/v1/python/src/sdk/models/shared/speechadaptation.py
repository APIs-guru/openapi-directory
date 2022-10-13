from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customclass
from . import phraseset


@dataclass_json
@dataclass
class SpeechAdaptation:
    custom_classes: Optional[List[customclass.CustomClass]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClasses' }})
    phrase_set_references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseSetReferences' }})
    phrase_sets: Optional[List[phraseset.PhraseSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseSets' }})
    
