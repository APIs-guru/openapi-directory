from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePrivacyDlpV2TimePartConfigPartToExtractEnum(str, Enum):
    TIME_PART_UNSPECIFIED = "TIME_PART_UNSPECIFIED"
    YEAR = "YEAR"
    MONTH = "MONTH"
    DAY_OF_MONTH = "DAY_OF_MONTH"
    DAY_OF_WEEK = "DAY_OF_WEEK"
    WEEK_OF_YEAR = "WEEK_OF_YEAR"
    HOUR_OF_DAY = "HOUR_OF_DAY"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TimePartConfig:
    part_to_extract: Optional[GooglePrivacyDlpV2TimePartConfigPartToExtractEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partToExtract' }})
    
