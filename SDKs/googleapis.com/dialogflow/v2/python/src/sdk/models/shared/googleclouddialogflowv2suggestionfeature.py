from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2SuggestionFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    FAQ = "FAQ"
    SMART_REPLY = "SMART_REPLY"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestionFeature:
    r"""GoogleCloudDialogflowV2SuggestionFeature
    The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
    """
    
    type: Optional[GoogleCloudDialogflowV2SuggestionFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
