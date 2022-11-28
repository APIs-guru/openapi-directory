from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotateTextResponse:
    r"""AnnotateTextResponse
    The text annotations response message.
    """
    
    categories: Optional[List[ClassificationCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    document_sentiment: Optional[Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSentiment') }})
    entities: Optional[List[Entity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[List[Sentence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    tokens: Optional[List[Token]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    
