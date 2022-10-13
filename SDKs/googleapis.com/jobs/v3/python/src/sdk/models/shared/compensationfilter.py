from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compensationrange

class CompensationFilterTypeEnum(str, Enum):
    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    UNIT_ONLY = "UNIT_ONLY"
    UNIT_AND_AMOUNT = "UNIT_AND_AMOUNT"
    ANNUALIZED_BASE_AMOUNT = "ANNUALIZED_BASE_AMOUNT"
    ANNUALIZED_TOTAL_AMOUNT = "ANNUALIZED_TOTAL_AMOUNT"

class CompensationFilterUnitsEnum(str, Enum):
    COMPENSATION_UNIT_UNSPECIFIED = "COMPENSATION_UNIT_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    ONE_TIME = "ONE_TIME"
    OTHER_COMPENSATION_UNIT = "OTHER_COMPENSATION_UNIT"


@dataclass_json
@dataclass
class CompensationFilter:
    include_jobs_with_unspecified_compensation_range: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeJobsWithUnspecifiedCompensationRange' }})
    range: Optional[compensationrange.CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    type: Optional[CompensationFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    units: Optional[List[CompensationFilterUnitsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    
