from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeCommentResponse:
    r"""AnalyzeCommentResponse
    The comment analysis response message.
    """
    
    attribute_scores: Optional[dict[str, AttributeScores]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeScores') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    detected_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
