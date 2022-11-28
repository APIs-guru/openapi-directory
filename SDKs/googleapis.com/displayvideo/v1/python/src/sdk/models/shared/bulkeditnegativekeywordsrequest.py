from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditNegativeKeywordsRequestInput:
    r"""BulkEditNegativeKeywordsRequestInput
    Request message for NegativeKeywordService.BulkEditNegativeKeywords.
    """
    
    created_negative_keywords: Optional[List[NegativeKeywordInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdNegativeKeywords') }})
    deleted_negative_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedNegativeKeywords') }})
    
