from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gamesnumberaffixconfiguration

class GamesNumberFormatConfigurationNumberFormatTypeEnum(str, Enum):
    NUMBER_FORMAT_TYPE_UNSPECIFIED = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    TIME_DURATION = "TIME_DURATION"
    CURRENCY = "CURRENCY"


@dataclass_json
@dataclass
class GamesNumberFormatConfiguration:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    num_decimal_places: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numDecimalPlaces' }})
    number_format_type: Optional[GamesNumberFormatConfigurationNumberFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberFormatType' }})
    suffix: Optional[gamesnumberaffixconfiguration.GamesNumberAffixConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    
