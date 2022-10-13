from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TagSettingKeywordOptionEnum(str, Enum):
    PLACEHOLDER_WITH_LIST_OF_KEYWORDS = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
    IGNORE = "IGNORE"
    GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"


@dataclass_json
@dataclass
class TagSetting:
    additional_key_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalKeyValues' }})
    include_click_through_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeClickThroughUrls' }})
    include_click_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeClickTracking' }})
    keyword_option: Optional[TagSettingKeywordOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordOption' }})
    
