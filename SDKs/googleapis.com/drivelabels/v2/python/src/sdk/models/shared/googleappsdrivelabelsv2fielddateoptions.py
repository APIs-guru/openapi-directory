from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypedate
from . import googletypedate

class GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum(str, Enum):
    DATE_FORMAT_UNSPECIFIED = "DATE_FORMAT_UNSPECIFIED"
    LONG_DATE = "LONG_DATE"
    SHORT_DATE = "SHORT_DATE"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldDateOptions:
    date_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateFormat' }})
    date_format_type: Optional[GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateFormatType' }})
    max_value: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    
