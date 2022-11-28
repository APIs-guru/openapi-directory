from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Token:
    r"""Token
    Represents the smallest syntactic building block of the text.
    """
    
    dependency_edge: Optional[DependencyEdge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyEdge') }})
    lemma: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lemma') }})
    part_of_speech: Optional[PartOfSpeech] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partOfSpeech') }})
    text: Optional[TextSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
