from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GooglePrivacyDlpV2TimePartConfig
    For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.
    """
    
    part_to_extract: Optional[GooglePrivacyDlpV2TimePartConfigPartToExtractEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partToExtract') }})
    
