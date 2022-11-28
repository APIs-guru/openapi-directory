from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceNegativeKeywordsResponse:
    r"""ReplaceNegativeKeywordsResponse
    Response message for NegativeKeywordService.ReplaceNegativeKeywords.
    """
    
    negative_keywords: Optional[List[NegativeKeyword]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywords') }})
    
